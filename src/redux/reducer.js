import { combineReducers } from 'redux';

import NavigatorStateReducer from '../modules/navigator/NavigatorState';
import SessionStateReducer, { RESET_STATE } from '../modules/session/SessionState';

const appReducer = combineReducers({
  // Navigator states
  navigatorState: NavigatorStateReducer,

  session: SessionStateReducer
});

export default (state, action) => {
  // if (action.type === RESET_STATE) {
  //   state = null; // eslint-disable-line no-param-reassign
  // }

  return appReducer(state, action);
};
