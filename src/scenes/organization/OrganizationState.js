import { get } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';


// Initial State
const initialState = {
  _id: '',
  name: '',
  localities: []
};

// Actions
const INIT_ORGANIZATION = 'INIT_ORGANIZATION';

// Action creators
const initOrganization = organization => ({ type: INIT_ORGANIZATION, organization });

// Thunks
export function getOrganizationInfo() {
  return async function(dispatch) {
    try {
      const body = await get(apiAddresses.ORGANIZATIONS);
      const { organization } = body;
      dispatch(initOrganization(organization));


    } catch(err) {
      console.log(err);
    }

  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORGANIZATION:
      return action.organization;
    default:
      return state;
  }
};
