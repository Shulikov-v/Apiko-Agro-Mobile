import { get } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';


// Initial State
const initialState = [];

// Actions
const INIT_FIELDS = 'INIT_FIELDS';

// Action creators
const initFields = fields => ({ type: INIT_FIELDS, fields });

// Thunks
export function getFields() {
  return async function(dispatch) {
    try {
      const body = await get(apiAddresses.FIELDS);
      const { fields } = body;
      dispatch(initFields(fields));


    } catch(err) {
      console.log(err);
    }

  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_FIELDS:
      return action.fields;
    default:
      return state;
  }
};
