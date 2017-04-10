import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from './middleware';
import reducer from './reducer';

const store = createStore(
  reducer,
  null,
  composeWithDevTools(
    applyMiddleware(...middleware),
    reduxLoop.install()
  )
);

export default store;
