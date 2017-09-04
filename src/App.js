import React from 'react';
// eslint-disable-next-line no-unused-vars
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from './components/Sidebar';
import ParticlesHome from './components/ParticlesHome';
import './App.css';

const App = () => (
  <div className="App">
    <div className="large-container">
      <Split flex="left" showOnResponsive="both">
        <Box flex="grow" justify="start">
          <ParticlesHome />
        </Box>
        <Box flex="grow" justify="start">
          <Sidebar />
        </Box>
      </Split>
    </div>
  </div>
);

export default App;
