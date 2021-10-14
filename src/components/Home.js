import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheet/index.css';
import HomeCountries from './HomeCountries';
import HomeHeader from './HomeHeader';

const Home = (props) => {
  const { totals } = props;
  const { datas } = props;

  return (
    <div className="main-container">

      <HomeHeader totals={totals} />
      <h5 className="home-title">STATS BY COUNTRY</h5>
      <HomeCountries datas={datas} />

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
