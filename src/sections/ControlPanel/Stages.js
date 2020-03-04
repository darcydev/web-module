import React, { useState } from 'react';
import { Slider } from 'antd';

import MapBox from '../MapBox/MapBox';
import Info from '../InfoBox/Stages/Info';

// Import the map images
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';

export default function StagesControlPanel() {
  const [stage, handleStage] = useState(1);

  let imgSrc;

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
      <MapBox imgSrc={imgSrc} />
      <Info />
    </>
  );
}
