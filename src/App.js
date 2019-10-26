import React from 'react';
import {Box} from '@material-ui/core';
import AcquisitionSurvey from './components/AcquisitionSurvey/AcquisitionSurvey';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Acquire</h1>
      </header>
      <Box>
        <AcquisitionSurvey/>
      </Box>
    </div>
  );
}

export default App;
