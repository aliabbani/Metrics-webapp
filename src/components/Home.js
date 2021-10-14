import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import '../stylesheet/index.css';
import { BiWorld } from 'react-icons/bi';

const Home = (props) => {
  let { totals } = props;
  const { datas } = props;

  if (!totals) {
    totals = JSON.parse(localStorage.getItem('totals'));
  } else {
    localStorage.setItem('totals', JSON.stringify(totals));
  }

  // eslint-disable-next-line max-len
  // const boldBox = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23, 24, 27, 28, 31, 32, 35, 36, 39, 40, 43, 44, 47, 48, 51, 52, 55, 56, 59, 60];

  return (
    <div className="main-container">
      <div className="header">
        <div className="header-left">
          <BiWorld className="header-icon" />
        </div>
        <div className="header-right">
          <h1 className="header-h1">WorldWide</h1>
          {totals.map((total) => (
            <h4 key={total.date} className="header-h4">
              {total.today_confirmed.toLocaleString()}
              {' '}
              cases
            </h4>
          ))}
        </div>
      </div>

      <h5 className="home-title">STATS BY COUNTRY</h5>

      <div className="container-grid">
        {datas.map((data) => {
          const test = `/detail/${data.id}`;
          return (
            <div key={data.id} className="inside-flex">
              <NavLink className="nav-icon" to={{ pathname: test, data }} exact>
                <AiOutlineRightCircle className="inside-up" />
              </NavLink>
              <div className="inside-down">
                <h3 className="inside-h3">{data.name}</h3>
                <div className="confirmed">
                  <h4 className="inside-h4">{data.today_confirmed.toLocaleString()}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Home.defaultProps = {
  datas: [],
  totals: [],
};

Home.propTypes = {
  datas: PropTypes.instanceOf(Array),
  totals: PropTypes.instanceOf(Array),
};

export default Home;
