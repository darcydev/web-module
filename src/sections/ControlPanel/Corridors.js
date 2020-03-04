import React, { useState } from 'react';
import styled from 'styled-components';

// Import the map images
import imageGeneral from '../../assets/images/corridors/general.png';
import imageNorthern from '../../assets/images/corridors/northern.png';
import imageSouthernInland from '../../assets/images/corridors/southernInland.png';
import imageSouthernCoastal from '../../assets/images/corridors/southernCoastal.png';
import imageCentralWest from '../../assets/images/corridors/centralWest.png';

import MapBox from '../MapBox/MapBox';
import InfoBox from '../InfoBox/Corridors/Info';

export default function CorridorsControlPanel() {
  const [btnSelected, handleBtnSelect] = useState('general');

  const CANCEL_BUTTON = (
    <button onClick={() => handleBtnSelect('general')}>X</button>
  );

  let map, info;

  switch (btnSelected) {
    case 'general':
      map = imageGeneral;
      info = 'to do';
      break;
    case 'northern':
      map = imageNorthern;
      info = 'to do';
      break;
    case 'southernInland':
      map = imageSouthernInland;
      info = 'to do';
      break;
    case 'southernCoastal':
      map = imageSouthernCoastal;
      info = 'to do';
      break;
    case 'centralWest':
      map = imageCentralWest;
      info = 'to do';
      break;
    default:
      map = imageGeneral;
      info = 'to do';
  }

  return (
    <>
      <StyledContainer>
        <h3 style={{ textAlign: 'left' }}>Select a route for more detail</h3>
        <StyledFlexDiv>
          <StyledButton
            style={{
              backgroundColor:
                btnSelected === 'northern' || btnSelected === 'general'
                  ? 'green'
                  : 'grey'
            }}
            onClick={
              btnSelected === 'northern'
                ? () => handleBtnSelect('general')
                : () => handleBtnSelect('northern')
            }
          >
            Northern
            {btnSelected === 'northern' ? CANCEL_BUTTON : null}
          </StyledButton>
          <StyledButton
            style={{
              backgroundColor:
                btnSelected === 'southernInland' || btnSelected === 'general'
                  ? 'gold'
                  : 'grey'
            }}
            onClick={
              btnSelected === 'southernInland'
                ? () => handleBtnSelect('general')
                : () => handleBtnSelect('southernInland')
            }
          >
            Southern Inland
            {btnSelected === 'southernInland' ? CANCEL_BUTTON : null}
          </StyledButton>
          <StyledButton
            style={{
              backgroundColor:
                btnSelected === 'southernCoastal' || btnSelected === 'general'
                  ? 'purple'
                  : 'grey'
            }}
            onClick={
              btnSelected === 'southernCoastal'
                ? () => handleBtnSelect('general')
                : () => handleBtnSelect('southernCoastal')
            }
          >
            Southern Central
            {btnSelected === 'southernCoastal' ? CANCEL_BUTTON : null}
          </StyledButton>
          <StyledButton
            style={{
              backgroundColor:
                btnSelected === 'centralWest' || btnSelected === 'general'
                  ? 'orange'
                  : 'grey'
            }}
            onClick={
              btnSelected === 'centralWest'
                ? () => handleBtnSelect('general')
                : () => handleBtnSelect('centralWest')
            }
          >
            Central West
            {btnSelected === 'centralWest' ? CANCEL_BUTTON : null}
          </StyledButton>
        </StyledFlexDiv>
      </StyledContainer>
      <MapBox imgSrc={map} alt={btnSelected} />
      <InfoBox heading={btnSelected} content={btnSelected} />
    </>
  );
}

const StyledContainer = styled.div`
  padding: 5px 10px;
`;

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
  margin: 7px;
  letter-spacing: 1.25px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
