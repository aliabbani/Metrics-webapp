/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Home = (props) => {
  const dispatch = useDispatch();
  const { datas } = props;
  console.log('here is my HOME data', datas);

  return (
    <>
      <div>Hello from the home page</div>
      <h2>STATS BY COUNTRY</h2>
      <div>
        {datas.map((data) => (
          <div key={data.id}>
            <BsFillArrowRightCircleFill onClick={() => dispatch(data.id)} />
            <div>{data.name}</div>
            <div>{data.today_confirmed}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
