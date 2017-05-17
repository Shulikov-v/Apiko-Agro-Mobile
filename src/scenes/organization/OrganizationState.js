// Initial State
const initialState = {
  _id: '',
  name: '',
  localities: [],
};

// Actions
const INIT_ORGANIZATION = 'INIT_ORGANIZATION';

// Action creators
export const initOrganization = organization => ({ type: INIT_ORGANIZATION, organization });

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORGANIZATION:
      return action.organization;
    default:
      return state;
  }
};
