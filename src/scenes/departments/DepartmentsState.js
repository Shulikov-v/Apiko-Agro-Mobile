import { get } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';


// Initial State
const initialState = [];

// Actions
export const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';

// Action creators
const initDepartments = departments => ({ type: INIT_DEPARTMENTS, departments });

// Thunks
export function getDepartments() {
  return async function(dispatch) {
    try {
      const body = await get(apiAddresses.DEPARTMENTS);
      const { departments } = body;
      dispatch(initDepartments(departments));

    } catch(err) {
      console.log(err);
    }

  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_DEPARTMENTS:
      return action.departments;
    default:
      return state;
  }
};
