const GET_DATA = 'GET_DATA';
const UPDATE_DATA = 'UPDATE_DATA';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  data: [],
};

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const updateData = (id) => ({
  type: UPDATE_DATA,
  id,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsRequestData = () => async (dispatch) => {
  const request = await fetch('https://api.covid19tracking.narrativa.com/api/2020-03-22');
  const result = await request.json();
  const datess = '2020-03-22';
  const pays = result.dates[datess].countries;
  // const total = result.total.today_confirmed;
  const formated = Object.values(pays);
  dispatch(getData(formated));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
      };
    // case UPDATE_DATA:
    //   return state.filter((data) => data.id !== action.id);
    case FETCH_ERROR:
      return {
        data: [],
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
