import React from 'react';
import { Tabs } from 'antd';

import CorridorsControlPanel from '../ControlPanel/Corridors';
import JourneyTimesControlPanel from '../ControlPanel/JourneyTimes';
import StagesControlPanel from '../ControlPanel/Stages';

import './TabPanel.css';

const { TabPane } = Tabs;

export default function TabPanel() {
  return (
    <Tabs animated={false}>
      <TabPane tab='Corridors' key='1'>
        <CorridorsControlPanel />
      </TabPane>
      <TabPane
        tab='Journey Times'
        key='2'
        style={{ letterSpacing: '0px', padding: '0px' }}
      >
        <JourneyTimesControlPanel />
      </TabPane>
      <TabPane tab='Stages' key='3'>
        <StagesControlPanel />
      </TabPane>
    </Tabs>
  );
}
