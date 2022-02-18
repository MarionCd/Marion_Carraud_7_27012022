import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import Inscription from './pages/Inscription/Inscription'
import Error from '../src/components/Error/index'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'



ReactDOM.render(
  <React.StrictMode>
  
    <Router>
      <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Inscription/>
      </Route>

      <Route exact path="/accueil">
        <Home/>
      </Route>

      <Route exact path="/account">
        <Account/>
      </Route>

      <Route>
          <Error/>
      </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

