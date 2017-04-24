import { ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { get } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';


// Initial State
const initialState = null;

// Actions
const INIT_LOCALITIES = 'INIT_LOCALITIES';

// Action creators
const initLocalities = localities => ({ type: INIT_LOCALITIES, localities });

// Thunks
export function getLocalities() {
  return async function(dispatch) {
    try {
      const body = await get(apiAddresses.LOCALITIES);
      const { localities } = body;
      dispatch(initLocalities(localities));


    } catch(err) {
      console.log(err);
    }

  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_LOCALITIES:
      return action.localities;
    default:
      return state;
  }
};
