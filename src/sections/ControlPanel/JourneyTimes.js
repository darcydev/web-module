import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import MapBox from '../MapBox/MapBox';
import InfoBox from '../InfoBox/JourneyTimes/Info';
import { ProgessBar } from '../../components/ProgressBar';
import { journeyTimes } from '../../data/JourneyTimes';
// Import the map images
import general from '../../assets/images/journeyTimes/general.png';

import './JourneyTimes.scss';

const { Option } = Select;

/**
 * format a time in number format (XX.XX) to string format (XX:XX)
 * @param {number} num
 * @returns {string} string
 */
const convertNumToTime = (num) => {
  let sign = num >= 0 ? 1 : -1;
  num *= sign;

  let hour = Math.floor(num);
  let dec = (1 / 60) * Math.round((num - hour) / (1 / 60));
  let minute = Math.floor(dec * 60) + '';

  if (minute.length < 2) minute = '0' + minute;

  sign = sign === 1 ? '' : '-';

  return sign + hour + ':' + minute;
};

export default function JourneyTimesControlPanel() {
  const [toLocation, handleToLocation] = useState('');
  const [fromLocation, handleFromLocation] = useState('');

  let beforeTime,
    afterTime,
    timeReduction = 100,
    beforeString,
    afterString;

  if (fromLocation && toLocation) {
    if (!journeyTimes[fromLocation][toLocation]) {
      handleToLocation('');
      handleFromLocation('');
    } else {
      let route = journeyTimes[fromLocation][toLocation];

      beforeTime = route[0];
      afterTime = route[1];

      beforeString = convertNumToTime(beforeTime);
      afterString = convertNumToTime(afterTime);
      timeReduction = Math.round((afterTime / beforeTime) * 100);
    }
  }

  // get all from locations from journeyTimes
  const FROM_LOCATIONS_OPTIONS_MARKUP = Object.keys(journeyTimes).map((v) => (
    <Option key={v} value={v}>
      {v}
    </Option>
  ));

  // get all possible destinations for the SELECTED location
  let TO_LOCATIONS_OPTIONS_MARKUP = null;

  if (fromLocation) {
    TO_LOCATIONS_OPTIONS_MARKUP = Object.keys(journeyTimes[fromLocation]).map(
      (v) => (
        <Option key={v} value={v}>
          {v}
        </Option>
      )
    );
  }

  return (
    <>
      <div className='padding-sm'>
        <StyledFlexContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>FROM:</h5>
            <Select
              defaultValue='SELECT LOCATION'
              onChange={(value) => handleFromLocation(value)}
              style={{ width: '100%' }}
            >
              {FROM_LOCATIONS_OPTIONS_MARKUP}
            </Select>
          </StyledSelectBarContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>TO:</h5>
            <Select
              defaultValue='SELECT LOCATION'
              onChange={(value) => handleToLocation(value)}
              style={{ width: '100%' }}
            >
              {TO_LOCATIONS_OPTIONS_MARKUP}
            </Select>
          </StyledSelectBarContainer>
        </StyledFlexContainer>
        <StyledSliders>
          <StyledSlider>
            <div className='progress-bar-labels'>
              <h5>Before</h5>
              <h3 style={{ width: `${100 - 10}%`, textAlign: 'right' }}>
                {beforeString}
              </h3>
            </div>
            <ProgessBar value={100} />
          </StyledSlider>
          <StyledSlider>
            <div className='progress-bar-labels'>
              <h5>After</h5>
              <h3 style={{ width: `${30 - 10}%`, textAlign: 'right' }}>
                {afterString}
              </h3>
            </div>
            <ProgessBar value={afterTime} />
          </StyledSlider>
        </StyledSliders>
      </div>
      <MapBox imgSrc={general} />
      <InfoBox />
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
