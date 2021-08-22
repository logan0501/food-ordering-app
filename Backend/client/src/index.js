import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LandingPage from './landingPage/LandingPage';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import OrderPage from './orderpage/OrderPage';
import SignIn from './auth/Signin';
import SignUp from './auth/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>
        <LandingPage/>
      </Route>
      
      <Route path="/orderpage">
        <OrderPage/>
      </Route>
        
      <Route path="/signin">
        <SignIn/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);
