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

  console.log(fromLocation, toLocation);

  if (fromLocation && toLocation && toLocation !== fromLocation) {
    console.log(journeyTimes);

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

    console.log(beforeTime, afterTime, timeReduction);
  }

  // TODO: automatically get the departure cities and create <Option> from that,
  // then, automatically get that departure cities avaliable arrival destinations and create <Option> from that

  return (
    <>
      <div>
        <div className='select-bars'>
          <h5>From:</h5>
          <Select
            defaultValue='SELECT LOCATION'
            onChange={value => handleToLocation(value)}
          >
            <Option value='sydney'>Sydney</Option>
            <Option value='canberra'>Canberra</Option>
            <Option value='newcastle'>Newcastle</Option>
          </Select>
          <h5>To:</h5>
          <Select
            defaultValue='SELECT LOCATION'
            onChange={value => handleFromLocation(value)}
          >
            <Option value='sydney'>Sydney</Option>
            <Option value='canberra'>Canberra</Option>
            <Option value='newcastle'>Newcastle</Option>
          </Select>
        </div>
        <div className='sliders'>
          <h5>Before</h5>
          <h3>{beforeString || 'XX:XX'}</h3>
          <ProgessBar />
          <h5>After</h5>
          <h3>{afterString || 'XX:XX'}</h3>
          <ProgessBar
            status='active'
            percent={timeReduction}
            strokeColor='green'
          />
        </div>
      </div>
      <MapBox imgSrc={northern} />
    </>
  );
}

const StyledSliders = styled.div``;

const StyledSlider = styled.div``;
