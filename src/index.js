import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components/AppContainer';
import './stylesheet/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
