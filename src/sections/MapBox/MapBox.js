import React from 'react';
import styled from 'styled-components';

import InfoBox from '../InfoBox/InfoBox';

export default function MapBox({ imgSrc = 'blank', alt = 'blank' }) {
  return (
    <>
      <StyledImg src={imgSrc} alt={alt} />
      <InfoBox />
    </>
  );
}

const StyledImg = styled.img`
  width: 100%;
`;
