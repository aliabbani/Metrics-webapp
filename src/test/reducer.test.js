import reducer from '../redux/reducers/dataReducer';

describe('Reducer test ', () => {
  test('Return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: [],
      total: [],
    });
  });
});
