import { INIT_LOCALITIES } from '../localities/LocalitiesState';


// Initial State
const initialState = {
  // modal window with filters
  isOpen: false,
  // id of locality, for witch need to display polygons
  activeLocality: null,
  //  <field_id>: false. Display polygons with field_id only if true
  fields: {},
};

// Actions
const CHANGE_ACTIVE_LOCALITY = 'CHANGE_ACTIVE_LOCALITY';
const TOGGLE_FIELDS_FILTER = 'TOGGLE_FIELDS_FILTER';
const TOGGLE_FILTERS_MODAL = 'TOGGLE_FILTERS_MODAL';

// Thunks
export function toggleFilterModal() {
  return function(dispatch) {
    dispatch({ type: TOGGLE_FILTERS_MODAL });
  }
}

export function toggleLocalitiesFilter(localityId) {
  return function(dispatch) {
    dispatch({ type: TOGGLE_FIELDS_FILTER, localityId });
  }
}

export function setActiveLocality(localityId) {
  return function(dispatch) {
    dispatch({ type: CHANGE_ACTIVE_LOCALITY, localityId });
  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_LOCALITIES:
      const fieldsInit = action.localities.reduce((acc, field) => {
        acc[field._id] = true;

        return acc;
      }, {});
      return { ...state, fields: fieldsInit };

    case CHANGE_ACTIVE_LOCALITY:
      return { ...state, activeLocality: action.localityId };

    case TOGGLE_FIELDS_FILTER:
      const fields = { ...state.fields };
      fields[action.localityId] = !fields[action.localityId];
      return { ...state, fields };

    case TOGGLE_FILTERS_MODAL:
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};
