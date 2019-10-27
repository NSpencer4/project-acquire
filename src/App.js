import React from 'react';
import {Box} from '@material-ui/core';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Acquire</h1>
      </header>
      <Box>
        <Homepage/>
      </Box>
    </div>
  );
}

export default App;
