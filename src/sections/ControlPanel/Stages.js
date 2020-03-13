import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from 'antd';

import MapBox from '../MapBox/MapBox';
import Info from '../InfoBox/Stages/Info';

// Import the map images
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';

export default function StagesControlPanel() {
  const [stage, handleStage] = useState(1);

  let imgSrc, INFO_HEADING, INFO_LIST;

  switch (stage) {
    case 1:
      imgSrc = one;
      break;
    case 2:
      imgSrc = two;
      break;
    case 3:
      imgSrc = three;
      break;
    default:
      imgSrc = one;
  }

  return (
    <>
      {/* CONTROL SECTION */}
      <div className='padding-sm' style={{ margin: '10px 40px' }}>
        <Slider
          dots
          marks={{ 1: 'Stage 1', 2: 'Stage 2', 3: 'Stage 3' }}
          step={1}
          min={1}
          max={3}
          onChange={value => handleStage(value)}
        />
      </div>
      {/* \.CONTROL SECTION */}

      {/* MAP SECTION */}
      <MapBox imgSrc={imgSrc} />
      {/* \MAP SECTION */}

      {/* INFO SECTION */}
      <StyledInfoContainer>
        <h1>{INFO_HEADING}</h1>
        <ul>{INFO_LIST}</ul>
        <p>
          Sit id dolor dolor nostrud elit est aliquip est commodo. Nostrud enim
          sint voluptate proident. Eiusmod nostrud cupidatat fugiat
          reprehenderit velit esse labore fugiat sit ut. Dolore exercitation
          fugiat ea ex consectetur cupidatat consequat. Laborum duis nulla
          cillum exercitation Lorem proident anim deserunt pariatur adipisicing.
          Nulla elit do ullamco nisi laborum amet ipsum duis non velit aliquip
          cillum non enim. Enim dolore magna nulla officia ex veniam aliqua
          consequat in occaecat mollit quis.
        </p>
      </StyledInfoContainer>
      {/* \.INFO SECTION */}
    </>
  );
}

const StyledInfoContainer = styled.div`
  padding: 5px 10px;
  text-align: left;

  h1 {
    text-transform: capitalize;
  }

  ul {
    list-style: none;
  }

  p {
    padding: 20px 0 0 0;
  }
`;
