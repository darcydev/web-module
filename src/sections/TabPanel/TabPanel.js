import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import Corridors from '../Corridors';
import JourneyTimes from '../JourneyTimes'
import Stages from '../Stages';

import './TabPanel.scss';

const { TabPane } = Tabs;

export default function TabPanel() {
  return (
    <Tabs animated={true} type='card'>
      <TabPane tab='Corridors' key='1'>
        <Corridors />
      </TabPane>
      <StyledBigTab tab='Journey Times' key='2'>
        <JourneyTimes />
      </StyledBigTab>
      <TabPane tab='Stages' key='3'>
        <Stages />
      </TabPane>
    </Tabs>
  );
}

const StyledBigTab = styled(TabPane)`
  font-size: 20px !important;
`;
