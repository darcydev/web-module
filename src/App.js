import React from 'react';

import TabPanel from './sections/TabPanel/TabPanel';

import './styles.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className='App'>
      <div>banner</div>
      <TabPanel />
    </div>
  );
}

export default App;

/*
React App flow of State:
1) Tab Panel
2) Control Panel
3) Map Box
4) Info Box
*/
