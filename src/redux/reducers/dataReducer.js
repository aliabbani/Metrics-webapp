const GET_DATA = 'GET_DATA';

const initialState = {
  data: [],
};

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchPostsRequestData = () => async (dispatch) => {
  const getFetch = fetch('https://api.covid19tracking.narrativa.com/api/2020-03-22')
    .then((response) => response.json()).then((json) => console.log(json));
  dispatch(getData(getFetch));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
