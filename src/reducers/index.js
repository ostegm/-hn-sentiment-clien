const initialState = {
  loading: false,
  errors: null,
  threads: {
    '8863': {
      title: 'This is a title!',
    },
  },
};

export const hnReducer = (state = initialState, action) => {
  return state;
};

export default hnReducer;
