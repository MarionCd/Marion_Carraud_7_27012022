import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Inscription from './pages/Inscription/Inscription'

ReactDOM.render(
  <React.StrictMode>
  
    <Router>
      
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Inscription/>
      </Route>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

