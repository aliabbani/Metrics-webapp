import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

describe('Component test snapshot', () => {
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
});
