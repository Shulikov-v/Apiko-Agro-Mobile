import { combineReducers } from 'redux';

import OrganizationReducer from '../scenes/organization/OrganizationState';
import LocalitiesReducer from '../scenes/localities/LocalitiesState';
import ProfileReducer from '../scenes/profile/ProfileState';

import NavigatorStateReducer from '../modules/navigator/NavigatorState';
import SessionStateReducer, { RESET_STATE } from '../modules/session/SessionState';
import AuthorizationReducer from '../scenes/authorization/AuthorizationState';

const appReducer = combineReducers({
  organization: OrganizationReducer,
  localities: LocalitiesReducer,
  profile: ProfileReducer,

  auth: AuthorizationReducer,
  session: SessionStateReducer,
  navigatorState: NavigatorStateReducer
});

export default (state, action) => {
  // if (action.type === RESET_STATE) {
  //   state = null; // eslint-disable-line no-param-reassign
  // }

  return appReducer(state, action);
};
