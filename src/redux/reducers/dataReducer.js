const GET_DATA = 'GET_DATA';
const FETCH_ERROR = 'FETCH_ERROR';
const GET_TOTAL = 'GET_TOTAL';

const initialState = {
  data: [],
  total: [],
};

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getTotal = (payload) => ({
  type: GET_TOTAL,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

let date = new Date();

const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
date = `${year}-${month}-${day}`;

export const fetchPostsRequestData = () => async (dispatch) => {
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`);
  const result = await request.json();
  const datess = date;
  const pays = result.dates[datess].countries;
  const formated = Object.values(pays);
  // console.log('here is my FORMATED', formated);
  dispatch(getData(formated));
};

export const fetchPostsRequestTotal = () => async (dispatch) => {
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`);
  const result = await request.json();
  const totaly = result.total;
  // const formatedTotal = Object.values(totaly);
  const formatedTotal = [];
  formatedTotal.push(totaly);
  dispatch(getTotal(formatedTotal));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
        total: [...state.total],
      };
    case GET_TOTAL:
      return {
        data: [...state.data],
        total: action.payload,
      };
    case FETCH_ERROR:
      return {
        data: [],
        total: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// const GET_TOTAL = 'GET_TOTAL';

// export const fetchPostsRequestTotal = () => async (dispatch) => {
//   const request = await fetch('https://api.covid19tracking.narrativa.com/api/2020-03-22');
//   const resultTotal = await request.json();
//   const xxx = resultTotal.total;
//   const formatedTotal = [];
//   formatedTotal.push(xxx);
//   console.log('here is my TOTAL Array', formatedTotal);
//   dispatch(getTotal(formatedTotal));
// };

// export const getTotal = (payload) => ({
//   type: GET_TOTAL,
//   payload,
// });

// case GET_TOTAL:
//   return {
//     data: [...state.data],
//     total: action.payload,
//   };
