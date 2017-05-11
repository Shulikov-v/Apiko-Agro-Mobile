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
export const initUserProfile = userProfile => ({ type: INIT_USER, userProfile });

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return action.userProfile;
    default:
      return state;
  }
};
