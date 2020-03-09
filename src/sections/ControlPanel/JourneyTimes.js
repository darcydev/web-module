import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import MapBox from '../MapBox/MapBox';
import InfoBox from '../InfoBox/JourneyTimes/Info';
import ProgressBar from '../../components/ProgressBar';
// import the data
import { journeyTimes } from '../../data/JourneyTimes';
// Import the map images
import general from '../../assets/images/journeyTimes/general.png';

// import './JourneyTimes.scss';

const { Option } = Select;

/**
 * helper function to convert a time in decimal format to string format
 * @param {number} num 2.30
 * @returns {string} 2hrs 30min
 */
const convertNumToString = num => {
  let hour = Math.round(num);
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
    <Option key={v} value={v}>
      {v}
    </Option>
  ));

export default function JourneyTimesControlPanel() {
  const [toLocation, handleToLocation] = useState('SELECT LOCATION');
  const [fromLocation, handleFromLocation] = useState('');

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  if (fromLocation && toLocation && journeyTimes[fromLocation][toLocation]) {
    const ROUTE = journeyTimes[fromLocation][toLocation];

    beforeTime = ROUTE[0];
    afterTime = ROUTE[1];

    beforeString = convertNumToString(beforeTime);
    afterString = convertNumToString(afterTime);

    timeReduction = Math.round((afterTime / beforeTime) * 100);
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
              <styledH4>Before</styledH4>
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
      <MapBox imgSrc={general} />
      <InfoBox />
    </>
  );
}

const StyledContainer = styled.div`
  padding: ${props => props.theme.sizes.sm};
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSelectBarContainer = styled.div`
  width: 48%;
`;

const StyledSelect = styled(Select)`
  font-size: 18px;
  width: 100%;
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
`;

/*
 <StyledSelect
              defaultValue='SELECT LOCATION'
              onFocus={() => handleToLocation('')}
              onChange={value => handleFromLocation(value)}
            >
              {FROM_LOCATIONS_OPTIONS_MARKUP}
            </StyledSelect> */
