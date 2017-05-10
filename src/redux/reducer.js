import { combineReducers } from 'redux';

import OrganizationReducer from '../scenes/organization/OrganizationState';
import DepartmentsReducer from '../scenes/departments/DepartmentsState';
import LocalitiesReducer from '../scenes/localities/LocalitiesState';
import ProfileReducer from '../scenes/profile/ProfileState';
import FieldsReducer from '../scenes/fields/FieldsState';
import MapReducer from '../scenes/map/MapViewState';
import PolygonReducer from '../scenes/polygons/PolygonsState';

import NavigatorStateReducer from '../modules/navigator/NavigatorState';
import SessionStateReducer, { RESET_STATE } from '../modules/session/SessionState';
import AuthorizationReducer from '../scenes/authorization/AuthorizationState';

const appReducer = combineReducers({
  organization: OrganizationReducer,
  departments: DepartmentsReducer,
  localities: LocalitiesReducer,
  profile: ProfileReducer,
  fields: FieldsReducer,
  polygons: PolygonReducer,
  mapFilter: MapReducer,

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
