/* eslint-disable react/prop-types */
import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import '../stylesheet/home.css';

const Home = (props) => {
  const { datas } = props;
  // console.log('here is my HOME data', datas);

  const onLink = () => {
    console.log('the icon is clickable');
  };

  return (
    <>
      <div className="header">
        <div className="header-left">image</div>
        <div className="header-right">
          <h1 className="header-h1">WorldWide</h1>
          <h4 className="header-h4">341235 cases</h4>
        </div>
      </div>

      <h5 className="home-title">STATS BY COUNTRY</h5>

      <div className="container-grid">
        {datas.map((data) => {
          const test = `/detail/${data.id}`;
          return (
            <div key={data.id} className="inside-flex">
              <NavLink to={{ pathname: test, data }} exact>
                <BsFillArrowRightCircleFill onClick={onLink} />
              </NavLink>
              <div className="inside-down">
                <h3 className="inside-h3">{data.name}</h3>
                <h4 className="inside-h4">{data.today_confirmed}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
