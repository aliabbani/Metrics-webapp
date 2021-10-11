import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducer from './reducers/dataReducer';

const reducer = combineReducers({
  dataReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
