import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { loadState, saveState } from '../utils/persistState';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(...middleware)),
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

export default store;
