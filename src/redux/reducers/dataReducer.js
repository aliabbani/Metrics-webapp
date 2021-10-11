const GET_DATA = 'GET_DATA';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  data: [],
};

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsRequestData = () => async (dispatch) => {
  const request = await fetch('https://api.covid19tracking.narrativa.com/api/2020-03-22');
  const result = await request.json();
  const datess = '2020-03-22';
  const pays = result.dates[datess].countries;
  const formated = Object.values(pays);
  dispatch(getData(formated));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
      };
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
