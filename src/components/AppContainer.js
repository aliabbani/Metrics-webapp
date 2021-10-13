import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import NotMatch from '../pages/NotMatch';
import Home from './Home';
import Details from './Details';
import { fetchPostsRequestData, fetchPostsRequestTotal } from '../redux/reducers/dataReducer';
import '../stylesheet/index.css';

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestData());
    dispatch(fetchPostsRequestTotal());
  }, []);

  const datas = useSelector((state) => state.dataReducer.data);
  const totals = useSelector((state) => state.dataReducer.total);
  // console.log('here is my DATAS', datas);
  console.log('here is my TOTALS', totals);

  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home datas={datas} totals={totals} />
        </Route>
        <Route path="/detail">
          <Details />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </div>
  );
};

export default AppContainer;

// dispatch(fetchPostsRequestTotal());
// const totals = useSelector((state) => state.dataReducer.total);
// console.log('here is my TOTALS', totals);
