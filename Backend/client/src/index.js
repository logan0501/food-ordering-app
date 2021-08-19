import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LandingPage from './landingPage/LandingPage';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import OrderPage from './orderpage/OrderPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>
        <LandingPage/>
      </Route>
      
      <Route path="/orderpage">
        <OrderPage/>
      </Route>

    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);
