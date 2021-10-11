const FETCH_SUCCESS_DATA = 'FETCH_SUCCESS_DATA';

const initialState = {
  data: [],
};

export const fetchPostsSuccessData = (payload) => ({
  type: FETCH_SUCCESS_DATA,
  payload,
});

export const fetchPostsRequestMissions = () => async (dispatch) => {
  const request = await fetch('/');
  const result = await request.json();
  console.log(result);
  dispatch(result);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
