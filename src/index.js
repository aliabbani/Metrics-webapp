import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './stylesheet/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>Hello from the store</div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
