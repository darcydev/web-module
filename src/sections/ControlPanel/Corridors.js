import React, { useState } from 'react';
import styled from 'styled-components';

// Import the map images
import northern from '../../assets/1.png';
import southernInland from '../../assets/2.png';
import southernCoastal from '../../assets/3.png';
import centralWest from '../../assets/4.png';

import MapBox from '../MapBox/MapBox';

export default function CorridorsControlPanel() {
  const [btnSelected, handleBtnSelect] = useState(northern);

  return (
    <>
      <div style={{ width: '60%', margin: 'auto' }}>
        <h3 style={{ textAlign: 'left' }}>Select a route for more detail</h3>
        <StyledFlexDiv>
          <StyledButton
            style={{ backgroundColor: 'green' }}
            onClick={() => handleBtnSelect(northern)}
          >
            Northern
          </StyledButton>
          <StyledButton
            style={{ backgroundColor: 'gold' }}
            onClick={() => handleBtnSelect(southernInland)}
          >
            Southern Inland
          </StyledButton>
          <StyledButton
            style={{ backgroundColor: 'purple' }}
            onClick={() => handleBtnSelect(southernCoastal)}
          >
            Southern Central
          </StyledButton>
          <StyledButton
            style={{ backgroundColor: 'orange' }}
            onClick={() => handleBtnSelect(centralWest)}
          >
            Central West
          </StyledButton>
        </StyledFlexDiv>
      </div>
      <MapBox imgSrc={btnSelected} alt={btnSelected} />
    </>
  );
}

const StyledFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

const StyledButton = styled.button`
  color: #fff;
  min-width: 200px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  letter-spacing: 1.25px;
  font-size: 20px;
  font-weight: 500;
`;
