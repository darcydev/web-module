import React from 'react';
import styled from 'styled-components';
import { TeamOutlined, CarOutlined } from '@ant-design/icons';

import InfoList from '../../../components/InfoList';

export default function InfoBox({ content }) {
  let HEADING_MARKUP;

  switch (content) {
    case 'northern':
      HEADING_MARKUP = 'Northern Route';
      break;
    case 'southernInland':
      HEADING_MARKUP = 'Southern Inland Route';
      break;
    case 'southernCentral':
      HEADING_MARKUP = 'Southern Central Route';
      break;
    case 'centralWest':
      HEADING_MARKUP = 'Central West Route';
      break;
    default:
      HEADING_MARKUP = 'General';
  }

  return (
    <StyledDiv>
      <StyledH1>{HEADING_MARKUP}</StyledH1>
      <InfoList
        heading='population'
        icon={<CarOutlined />}
        listContent={[
          '2016 population',
          '2056 expected population',
          '2056 population with Fast Rail'
        ]}
      />
      <InfoList
        heading='employment'
        icon={<TeamOutlined />}
        listContent={[
          '2016 population',
          '2056 expected population',
          '2056 population with Fast Rail'
        ]}
      />
      <p>
        Tempor dolor nisi nisi in culpa voluptate laboris ut. Anim enim eiusmod
        sint ea. Sunt culpa laborum veniam eiusmod adipisicing commodo.
        Consequat ipsum ad consectetur ea. Excepteur anim minim deserunt nostrud
        nisi consectetur dolore pariatur excepteur duis.
      </p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 5px 10px;
  text-align: left;

  p {
    padding: 20px 0 0 0;
  }
`;

const StyledH1 = styled.h1`
  text-transform: capitalize;
`;
