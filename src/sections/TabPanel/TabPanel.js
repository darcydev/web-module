import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import CorridorsControlPanel from '../ControlPanel/Corridors';
import JourneyTimesControlPanel from '../ControlPanel/JourneyTimes';
import StagesControlPanel from '../ControlPanel/Stages';

import './TabPanel.scss';

const { TabPane } = Tabs;

export default function TabPanel() {
  return (
    <Tabs animated={true} type='card'>
      <TabPane tab='Corridors' key='1'>
        <CorridorsControlPanel />
      </TabPane>
      <StyledBigTab tab='Journey Times' key='2'>
        <JourneyTimesControlPanel />
      </StyledBigTab>
      <TabPane tab='Stages' key='3'>
        <StagesControlPanel />
      </TabPane>
    </Tabs>
  );
}

const StyledBigTab = styled(TabPane)`
  font-size: 20px !important;
`;
