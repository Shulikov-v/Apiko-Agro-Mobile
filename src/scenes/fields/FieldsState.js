// Initial State
const initialState = [];

// Actions
const INIT_FIELDS = 'INIT_FIELDS';

// Action creators
export const initFields = fields => ({ type: INIT_FIELDS, fields });

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_FIELDS:
      return action.fields;
    default:
      return state;
  }
};
