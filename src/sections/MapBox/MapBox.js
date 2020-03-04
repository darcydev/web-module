import React from 'react';
import styled from 'styled-components';

export default function MapBox({ imgSrc = 'blank', alt = 'blank' }) {
  return (
    <>
      <StyledImg src={imgSrc} alt={alt} />
    </>
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 760px;
  max-height: 760px;
`;
