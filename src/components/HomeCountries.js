import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiOutlineRightCircle } from 'react-icons/ai';

const HomeCountries = (props) => {
  const { datas } = props;

  return (
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
  );
};

HomeCountries.defaultProps = {
  datas: [],
};

HomeCountries.propTypes = {
  datas: PropTypes.instanceOf(Array),
};

export default HomeCountries;
