import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/navbar.css';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: '<',
    },
  ];
  return (
    <nav className="navBar">
      <div className="left-nav">
        {links.map((link) => (
          <div
            className="right-nav-li"
            key={link.id}
          >
            <NavLink
              to={link.path}
              className="left-nav-a"
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="middle-nav">most views</div>
      <div className="right-nav">
        <BsFillMicFill className="mic" />
        <BsFillGearFill className="gear" />
      </div>
    </nav>
  );
};

export default Navbar;
