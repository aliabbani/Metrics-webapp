import React from 'react';
import '../stylesheet/navbar.css';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <nav className="navBar">
      <div className="left-nav">
        <IoIosArrowBack />
      </div>
      <div className="middle-nav">Most views</div>
      <ul className="right-nav">
        <BsFillMicFill />
        <BsFillGearFill />
      </ul>
    </nav>
  );
};

export default Navbar;
