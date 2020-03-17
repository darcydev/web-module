import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { PathLine } from 'react-svg-pathline';

// components
import ProgressBar from '../../components/ProgressBar';

// data
import { journeyTimes } from '../../data/JourneyTimes';

// assets
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
      {/* CONTROL SECTION */}
      <div>
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
      </div>
      {/* \.CONTROL SECTION */}

      {/* MAP SECTION */}
      <div style={{ position: 'relative' }}>
        <img
          src={mapImage}
          alt='journey-times-map'
          style={{ display: 'block', width: '100%' }}
        />
        <StyledMarkerSpan
          id='map-marker__port-macquarie'
          onClick={() => console.log('port macquiare was clicked')}
          style={{
            top: '15%',
            left: '81%'
          }}
        ></StyledMarkerSpan>
        <div
          className='svg-container'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <svg>
            <line
              stroke='#5AB1BB'
              stroke-width='4'
              x1='275'
              x2='10'
              y1='70'
              y2='1000'
            ></line>
          </svg>
        </div>
        <StyledMarkerSpan
          id='map-marker__taree'
          onClick={() => console.log('taree was clicked')}
          style={{
            top: '23%',
            left: '76%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__newcastle'
          onClick={() => console.log('newcastle was clicked')}
          style={{
            top: '40%',
            left: '63%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__lake-macquarie'
          onClick={() => console.log('lake macquarie was clicked')}
          style={{
            top: '42%',
            left: '61%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__tuggerah'
          onClick={() => console.log('tuggerah was clicked')}
          style={{
            top: '46%',
            left: '58%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__gosford'
          onClick={() => console.log('gosford was clicked')}
          style={{
            top: '48%',
            left: '57%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__epping'
          onClick={() => console.log('epping was clicked')}
          style={{
            top: '54%',
            left: '54%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__sydney'
          onClick={() => console.log('sydney was clicked')}
          style={{
            top: '56%',
            left: '52%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__parkes'
          onClick={() => console.log('parkes was clicked')}
          style={{
            top: '45%',
            left: '5%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__orange'
          onClick={() => console.log('orange was clicked')}
          style={{
            top: '48%',
            left: '20%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__bathurst'
          onClick={() => console.log('bathurst was clicked')}
          style={{
            top: '49%',
            left: '29%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__lithgow'
          onClick={() => console.log('lithgow was clicked')}
          style={{
            top: '50%',
            left: '38%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__katoomba'
          onClick={() => console.log('katoomba was clicked')}
          style={{
            top: '54%',
            left: '41%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__st-marys'
          onClick={() => console.log('st marys was clicked')}
          style={{
            top: '55%',
            left: '48%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__campbelltown'
          onClick={() => console.log('campbelltown was clicked')}
          style={{
            top: '59%',
            left: '49%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__maccarthur'
          onClick={() => console.log('maccarthur was clicked')}
          style={{
            top: '62%',
            left: '47%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__wollongong'
          onClick={() => console.log('wollongong was clicked')}
          style={{
            border: '1px solid red',
            top: '66%',
            left: '49%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__dapto'
          onClick={() => console.log('dapto was clicked')}
          style={{
            top: '69%',
            left: '49%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__shellharbour'
          onClick={() => console.log('shellharbour was clicked')}
          style={{
            top: '71%',
            left: '49%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__kiama'
          onClick={() => console.log('kiama was clicked')}
          style={{
            top: '72%',
            left: '48%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__bomdaberry'
          onClick={() => console.log('bomdaberry was clicked')}
          style={{
            top: '74%',
            left: '46%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__moss-vale'
          onClick={() => console.log('moss vale was clicked')}
          style={{
            top: '69%',
            left: '42%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__goulburn'
          onClick={() => console.log('goulburn was clicked')}
          style={{
            top: '72%',
            left: '31%'
          }}
        ></StyledMarkerSpan>
        <StyledMarkerSpan
          id='map-marker__canberra'
          onClick={() => console.log('canberra was clicked')}
          style={{
            top: '82%',
            left: '22%'
          }}
        ></StyledMarkerSpan>
      </div>
      {/* \.MAP SECTION */}

      {/* INFO SECTION */}
      <div style={{ padding: '5px 10px' }}>
        <p style={{ textAlign: 'left' }}>
          Economic modelling shows ONE HOUR is the accepted business/commute
          time.
          <br />
          <br />
          Research shows people will travel TWO HOURS for a social interaction.
        </p>
      </div>
      {/* \.INFO SECTION */}
    </>
  );
}

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

const StyledMarkerSpan = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  cursor: pointer;

  border: 1px solid red;
`;
