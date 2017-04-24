import { combineReducers } from 'redux';

import NavigatorStateReducer from '../modules/navigator/NavigatorState';
import SessionStateReducer, { RESET_STATE } from '../modules/session/SessionState';
import AuthorizationReducer from '../scenes/authorization/AuthorizationState';

const appReducer = combineReducers({
  // Navigator states
  navigatorState: NavigatorStateReducer,
  auth: AuthorizationReducer,
  session: SessionStateReducer
});

export default (state, action) => {
  // if (action.type === RESET_STATE) {
  //   state = null; // eslint-disable-line no-param-reassign
  // }

  return appReducer(state, action);
};
