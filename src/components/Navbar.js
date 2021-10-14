import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/index.css';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

const Navbar = () => (
  <nav className="navBar">
    <NavLink
      to={{ pathname: '/' }}
      className="left-nav"
      activeClassName="active-link"
      exact
    >
      <IoIosArrowBack />
    </NavLink>
    <div className="middle-nav">COVID-19 DATA</div>
    <div className="right-nav">
      <BsFillMicFill className="mic" />
      <BsFillGearFill className="gear" />
    </div>
  </nav>
);
export default Navbar;
