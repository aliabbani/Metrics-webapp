import React from 'react';
import PropTypes from 'prop-types';
import { BiWorld } from 'react-icons/bi';

const HomeHeader = (props) => {
  let { totals } = props;
  if (!totals) {
    totals = JSON.parse(localStorage.getItem('totals'));
  } else {
    localStorage.setItem('totals', JSON.stringify(totals));
  }

  return (
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
  );
};

HomeHeader.defaultProps = {
  totals: [],
};

HomeHeader.propTypes = {
  totals: PropTypes.instanceOf(Array),
};

export default HomeHeader;
