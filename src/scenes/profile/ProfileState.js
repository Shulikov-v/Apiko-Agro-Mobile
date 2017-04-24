import { get } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';


// Initial State
const initialState = {
  _id: '',
  username: '',
  profile: {
    firstName: '',
    lastName: '',
    email: ''
  },
  roles: []
};

// Actions
const INIT_USER = 'INIT_USER';

// Action creators
const initUserProfile = userProfile => ({ type: INIT_USER, userProfile });

// Thunks
export function getUserProfile() {
  return async function(dispatch) {
    try {
      const body = await get(apiAddresses.ACCOUNT_ME);
      const { user } = body;

      dispatch(initUserProfile(user));

    } catch(err) {
      console.log(err);
    }

  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return action.userProfile;
    default:
      return state;
  }
};
