// Initial State
const initialState = [];

// Actions
export const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';

// Action creators
export const initDepartments = departments => ({ type: INIT_DEPARTMENTS, departments });

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_DEPARTMENTS:
      return action.departments;
    default:
      return state;
  }
};
