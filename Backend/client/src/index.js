import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LandingPage from './landingPage/LandingPage';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <LandingPage/>
      </Route>
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);
