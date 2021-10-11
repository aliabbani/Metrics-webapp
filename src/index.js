import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import './stylesheet/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
