import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { Map, TileLayer, WMSTileLayer } from 'react-leaflet';

import MapBox from '../MapBox/MapBox';
import InfoBox from '../InfoBox/JourneyTimes/Info';
import ProgressBar from '../../components/ProgressBar';
// import the data
import { journeyTimes } from '../../data/JourneyTimes';
// Import the map images
import mapImage from '../../assets/images/journeyTimes/journey-times.png';

import './JourneyTimes.scss';

const { Option } = Select;

/**
 * helper function to convert a time in decimal format to string format
 * @param {number} num 2.30
 * @returns {string} 2hrs 30min
 */
const convertNumToString = num => {
  let hour = Math.floor(num);
  let minute = Math.round((num - hour) * 100);

  return `${hour}hrs ${minute}min`;
};

/**
 * a helper function to convert all object keys into a option within select bar
 * @param {object} objKey
 * @returns {component}
 */
const convertKeysToOption = objKey =>
  Object.keys(objKey).map(v => (
    <StyledOption key={v} value={v}>
      {v}
    </StyledOption>
  ));

export default function JourneyTimesControlPanel() {
  const [toLocation, handleToLocation] = useState('SELECT LOCATION');
  const [fromLocation, handleFromLocation] = useState('');

  const [mapLocationA, handleMapLocationA] = useState('');
  const [mapLocationB, handleMapLocationB] = useState('');

  const onMapMarkerClicked = locationClicked => {
    mapLocationA === ''
      ? handleMapLocationA(locationClicked)
      : handleMapLocationB(locationClicked);
  };

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  if (fromLocation && toLocation) {
    const ROUTE = journeyTimes[fromLocation][toLocation];

    if (ROUTE) {
      beforeTime = ROUTE[0];
      afterTime = ROUTE[1];
      beforeString = convertNumToString(beforeTime);
      afterString = convertNumToString(afterTime);
      timeReduction = Math.round((afterTime / beforeTime) * 100);
    }
  }

  const FROM_LOCATIONS_OPTIONS_MARKUP = convertKeysToOption(journeyTimes);
  const TO_LOCATIONS_OPTIONS_MARKUP = fromLocation
    ? convertKeysToOption(journeyTimes[fromLocation])
    : null;

  return (
    <>
      <StyledContainer>
        <StyledFlexContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>FROM:</h5>
            <StyledSelect
              defaultValue='SELECT LOCATION'
              onFocus={() => handleToLocation('')}
              onChange={value => handleFromLocation(value)}
            >
              {FROM_LOCATIONS_OPTIONS_MARKUP}
            </StyledSelect>
          </StyledSelectBarContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>TO:</h5>
            <StyledSelect
              defaultValue='SELECT LOCATION'
              onChange={value => handleToLocation(value)}
            >
              {TO_LOCATIONS_OPTIONS_MARKUP}
            </StyledSelect>
          </StyledSelectBarContainer>
        </StyledFlexContainer>
        <div>
          <StyledSlider>
            <StyledSliderHeadings>
              <StyledH4>Before</StyledH4>
              <h3>{beforeString}</h3>
            </StyledSliderHeadings>
            <ProgressBar value={100} />
          </StyledSlider>
          <StyledSlider>
            <StyledSliderHeadings>
              <StyledH4>After</StyledH4>
              <h3>{afterString}</h3>
            </StyledSliderHeadings>
            <ProgressBar value={timeReduction ? timeReduction : 100} />
          </StyledSlider>
        </div>
      </StyledContainer>

      <StyledClickMap>
        <img
          src={mapImage}
          alt='journey-times-map'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <StyledMarkerContainer style={{ top: 474, left: 264 }}>
          <StyledMarker
            id='map-marker__newcastle'
            onClick={() => onMapMarkerClicked('newcastle')}
          >
            N
          </StyledMarker>
        </StyledMarkerContainer>
        <StyledMarkerContainer style={{ top: 35, left: 155 }}>
          <StyledMarker>Sydney</StyledMarker>
        </StyledMarkerContainer>

        <div className='invisible-area area-one'>
          <div className='tooltip'>I'm a tooltip!</div>
        </div>
        <div className='invisible-area area-two'>
          <div className='tooltip'>I'm another tooltip!</div>
        </div>
      </StyledClickMap>

      <InfoBox />
    </>
  );
}

const StyledContainer = styled.div`
  padding: 10px;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSelectBarContainer = styled.div`
  width: 48%;

  ${({ theme }) => theme.sm`
    h5 {
      font-size: 14px;
    }
  `}
`;

const StyledSelect = styled(Select)`
  font-size: 18px;
  width: 100%;

  ${({ theme }) => theme.sm`
    font-size: 12px;
  `}
`;

const StyledOption = styled(Option)`
  font-size: 18px;
  background: red;
`;

const StyledSlider = styled.div`
  padding: 10px 0;
`;
const StyledSliderHeadings = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledH4 = styled.h4`
  align-self: center;
  padding-bottom: 0px;
`;

const StyledClickMap = styled.div``;
const StyledMarkerContainer = styled.div`
  position: absolute;
`;
const StyledMarker = styled.div`
  display: none;
`;
