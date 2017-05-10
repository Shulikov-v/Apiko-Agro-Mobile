import { get, query } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';


// Initial State
const initialState = [];

// Actions
export const INIT_POLYGONS = 'INIT_POLYGONS';

// Action creators
const initPolygons = polygons => ({ type: INIT_POLYGONS, polygons });

// Thunks
export function getPolygons(activeLocality) {
  return async function(dispatch) {
    try {
      const body = await get(`${apiAddresses.POLYGONS}/${query({ localityId: activeLocality })}`);
      const { polygons } = body;
      dispatch(initPolygons(polygons));

    } catch(err) {
      console.log(err);
    }

  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_POLYGONS:
      return action.polygons;
    default:
      return state;
  }
};
