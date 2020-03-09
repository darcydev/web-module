import React from 'react';
import { ThemeProvider } from 'styled-components';

import TabPanel from './sections/TabPanel/TabPanel';

import { theme } from './theme';

import './styles.scss';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div>banner</div>
        <TabPanel />
      </div>
    </ThemeProvider>
  );
}
