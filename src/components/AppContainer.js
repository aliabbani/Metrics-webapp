import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import NotMatch from '../pages/NotMatch';
import Home from './Home';
import Details from './Details';
import { fetchPostsRequestData } from '../redux/reducers/dataReducer';

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestData());
  }, []);

  const datas = useSelector((state) => state.dataReducer.data);
  console.log('here is my DATAS', datas);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home datas={datas} />
        </Route>
        <Route path="/details">
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
