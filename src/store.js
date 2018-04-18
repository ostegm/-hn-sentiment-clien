import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { hnReducer } from './reducers';

const store = createStore(
  combineReducers({
    form: formReducer,
    hnData: hnReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
