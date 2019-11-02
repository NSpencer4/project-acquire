import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
      <Router>
          <Route exact path="/">
              <Navbar />
              <Homepage />
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/sign-up">
              <SignUp/>
          </Route>
      </Router>
  );
}

export default App;
