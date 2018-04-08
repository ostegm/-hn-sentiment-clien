import getFakeInitialState from './fake-state';

let initialState = getFakeInitialState()

export const hnReducer = (state = initialState, action) => {
  return state;
};

export default hnReducer;
