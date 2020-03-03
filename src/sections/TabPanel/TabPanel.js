import React from 'react';
import { Tabs } from 'antd';

import CorridorsControlPanel from '../ControlPanel/Corridors';
import JourneyTimesControlPanel from '../ControlPanel/JourneyTimes';
import StagesControlPanel from '../ControlPanel/Stages';

const { TabPane } = Tabs;

export default function TabPanel() {
  return (
    <Tabs type='card'>
      <TabPane tab='Corridors' key='1'>
        <CorridorsControlPanel />
      </TabPane>
      <TabPane tab='Journey Times' key='2'>
        <JourneyTimesControlPanel />
      </TabPane>
      <TabPane tab='Stages' key='3'>
        <StagesControlPanel />
      </TabPane>
    </Tabs>
  );
}
