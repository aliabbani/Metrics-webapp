import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import AppContainer from '../components/AppContainer';
import Home from '../components/Home';
// import Details from '../components/Details';
import store from '../redux/store';
// import Navbar from '../components/Navbar';

describe('Component test snapshot', () => {
  it('App renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Router renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavLink to="/"><IoIosArrowBack /></NavLink>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
