import * as actions from '../actions';

const initialState = {
  loading: false,
  error: null,
  thread: {
    by: '',
    title: '',
    descendants: 0,
    id: 0,
    kids: [],
  },
};

export const hnReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_THREAD_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === actions.FETCH_THREAD_SUCCESS) {
    return Object.assign({}, state, {
      thread: action.thread,
      loading: false,
      error: null,
    });
  } else if (action.type === actions.FETCH_THREAD_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false,
    });
  }
  return state;
};

export default hnReducer;
