/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import '../stylesheet/home.css';
import { BiWorld } from 'react-icons/bi';

const Home = (props) => {
  const { datas, totals } = props;

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
              {total.today_confirmed}
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
            <div key={data.id} className={datas.indexOf(data) % 2 === 0 ? 'inside-flex' : 'inside-flex-bolder'}>
              <NavLink className="nav-icon" to={{ pathname: test, data }} exact>
                <AiOutlineRightCircle className="inside-up" />
              </NavLink>
              <div className="inside-down">
                <h3 className="inside-h3">{data.name}</h3>
                <div className="confirmed">
                  <h4 className="inside-h4">{data.today_confirmed}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

// console.log('here is my HOME data', datas);
// let total = 0;
// for (let i = 0; i < datas.length; i = +1) {
//   total += datas[i].today_confirmed;
// }
// console.log(total);
// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// const resul = datas.today_confirmed.reduce(reducer);

// <div className="header-right">
//   <h1 className="header-h1">WorldWide</h1>
//   {totals.map((total) => (
//     <h4 key={total.date} className="header-h4">
//       {total.today_confirmed}
//       {' '}
//       cases
//     </h4>
//   ))}
// </div>;
