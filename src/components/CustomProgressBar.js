import React from 'react';
import styled from 'styled-components';

export default function ProgessBar({ lineColor, heading, width, timeString }) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <StyledHeading>{heading}</StyledHeading>
        <h3 style={{ width: `${width - 10}%`, textAlign: 'right' }}>
          {timeString}
        </h3>
      </div>
      <OuterBar>
        <InnerBar style={{ backgroundColor: lineColor, width: `${width}%` }}>
          100%
        </InnerBar>
      </OuterBar>
    </div>
  );
}

const StyledHeading = styled.h4`
  text-align: left;
  text-transform: uppercase;
  width: 10%;
`;

const OuterBar = styled.div`
  background-color: whiteSmoke;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(208, 208, 208, 0.5) inset;
  width: 100%;
  height: 10px;
`;

const InnerBar = styled.span`
  height: 12px;
  border-radius: 3px;
  display: block;
  text-indent: -9999px;
`;
