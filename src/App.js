import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
      <Router>
          <Route exact path="/">
              <Navbar />
              <Homepage />
          </Route>
          <Route path="/about">
              <div>About</div>
          </Route>
      </Router>
  );
}

export default App;
