import React from 'react';

import Theme from './styles/theme';
import TabPanel from './sections/TabPanel/TabPanel';

import './styles.scss';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <Theme>
      <div className='App'>
        <div>banner</div>
        <TabPanel />
      </div>
    </Theme>
  );
}
