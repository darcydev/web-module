import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import MapBox from '../MapBox/MapBox';

import ProgessBar from '../../components/ProgessBar';

import { journeyTimes } from '../../data/JourneyTimes';

// Import the map images
import northern from '../../assets/1.png';

const { Option } = Select;

export default function JourneyTimesControlPanel() {
  const [toLocation, handleToLocation] = useState('');
  const [fromLocation, handleFromLocation] = useState('');

  let beforeTime, afterTime, timeReduction, beforeString, afterString;

  if (fromLocation && toLocation) {
    const ROUTE = journeyTimes[fromLocation][toLocation];

    beforeTime = ROUTE[0];
    afterTime = ROUTE[1];

    /**
     * format a time in number format to string format
     * @param {number} num 11.05
     * @returns {string} string 11:09
     */
    const convertFloatToTime = num => {
      let sign = num >= 0 ? 1 : -1;
      num *= sign;

      let hour = Math.floor(num);
      let dec = (1 / 60) * Math.round((num - hour) / (1 / 60));
      let minute = Math.floor(dec * 60) + '';

      if (minute.length < 2) minute = '0' + minute;

      sign = sign === 1 ? '' : '-';

      return sign + hour + ':' + minute;
    };

    beforeString = convertFloatToTime(beforeTime);
    afterString = convertFloatToTime(afterTime);
    timeReduction = Math.round((afterTime / beforeTime) * 100);
  }

  // TODO: automatically get the departure cities and create <Option> from that,

  // get all from locations from journeyTimes
  const FROM_LOCATIONS_OPTIONS_MARKUP = Object.keys(journeyTimes).map(v => (
    <Option key={v} value={v}>
      {v}
    </Option>
  ));

  // get all possible destinations for the SELECTED location

  let TO_LOCATIONS_OPTIONS_MARKUP = null;

  if (fromLocation) {
    TO_LOCATIONS_OPTIONS_MARKUP = Object.keys(journeyTimes[fromLocation]).map(
      v => (
        <Option key={v} value={v}>
          {v}
        </Option>
      )
    );
  }

  return (
    <>
      <div>
        <StyledFlexContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>FROM:</h5>
            <Select
              defaultValue='SELECT LOCATION'
              onChange={value => handleFromLocation(value)}
              style={{ width: '100%' }}
            >
              {FROM_LOCATIONS_OPTIONS_MARKUP}
            </Select>
          </StyledSelectBarContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>TO:</h5>
            <Select
              defaultValue='SELECT LOCATION'
              onChange={value => handleToLocation(value)}
              style={{ width: '100%' }}
            >
              {TO_LOCATIONS_OPTIONS_MARKUP}
            </Select>
          </StyledSelectBarContainer>
        </StyledFlexContainer>
        <StyledSliders>
          <StyledSlider>
            <StyledFlexContainer>
              <StyledH5>BEFORE</StyledH5>
              <h3>{beforeString || 'XX:XX'}</h3>
            </StyledFlexContainer>
            <ProgessBar />
          </StyledSlider>
          <StyledSlider>
            <StyledFlexContainer>
              <StyledH5>AFTER</StyledH5>
              <h3>{afterString || 'XX:XX'}</h3>
            </StyledFlexContainer>
            <ProgessBar
              status='active'
              percent={timeReduction}
              strokeColor='green'
            />
          </StyledSlider>
        </StyledSliders>
      </div>
      <MapBox imgSrc={northern} />
    </>
  );
}

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSelectBarContainer = styled.div`
  width: 48%;
`;

const StyledSliders = styled.div``;

const StyledSlider = styled.div`
  padding: 10px 0;
`;

const StyledH5 = styled.h5`
  margin: auto 0;
`;
