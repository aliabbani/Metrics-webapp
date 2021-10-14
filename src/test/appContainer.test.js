import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from '../components/AppContainer';
import store from '../redux/store';

describe('AppContainer component', () => {
  it('AppContainer renders correctly', () => {
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
});
