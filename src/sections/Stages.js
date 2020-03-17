import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from 'antd';

// map images
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';

export default function StagesControlPanel() {
  const [stage, handleStage] = useState(1);

  let imgSrc, infoHeading, infoList, infoParagraph;

  // INFO CONTENT
  switch (stage) {
    case 1:
      imgSrc = one;
      infoHeading = 'Stage 1 Heading';
      infoList = [
        '+45% population',
        '+4,218 people employed',
        '+$510m in GRP*',
        '+73.3% land value prices'
      ];
      infoParagraph =
        'Sit id dolor dolor nostrud elit est aliquip est commodo. Nostrud enim sint voluptate proident. Eiusmod nostrud cupidatat fugiat reprehenderit velit esse labore fugiat sit ut.';
      break;
    case 2:
      imgSrc = two;
      infoHeading = 'Stage 2 Heading';
      infoList = [
        '+45% population',
        '+4,218 people employed',
        '+$510m in GRP*',
        '+73.3% land value prices'
      ];
      infoParagraph =
        'Sit id dolor dolor nostrud elit est aliquip est commodo. Nostrud enim sint voluptate proident. Eiusmod nostrud cupidatat fugiat reprehenderit velit esse labore fugiat sit ut.';
      break;
    case 3:
      imgSrc = three;
      infoHeading = 'Stage 3 Heading';
      infoList = [
        '+45% population',
        '+4,218 people employed',
        '+$510m in GRP*',
        '+73.3% land value prices'
      ];
      infoParagraph =
        'Sit id dolor dolor nostrud elit est aliquip est commodo. Nostrud enim sint voluptate proident. Eiusmod nostrud cupidatat fugiat reprehenderit velit esse labore fugiat sit ut.';
      break;
    default:
      imgSrc = one;
      infoHeading = 'Stage 1 Heading';
      infoList = [
        '+45% population',
        '+4,218 people employed',
        '+$510m in GRP*',
        '+73.3% land value prices'
      ];
      infoParagraph =
        'Sit id dolor dolor nostrud elit est aliquip est commodo. Nostrud enim sint voluptate proident. Eiusmod nostrud cupidatat fugiat reprehenderit velit esse labore fugiat sit ut.';
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
      <StyledMap src={imgSrc} alt={imgSrc} />
      {/* \MAP SECTION */}

      {/* INFO SECTION */}
      <StyledInfoContainer>
        <h1>{infoHeading}</h1>
        <ul>{infoList}</ul>
        <p>{infoParagraph}</p>
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

const StyledMap = styled.img`
  width: 100%;
  height: auto;
  max-width: 760px;
  max-height: 760px;
`;
