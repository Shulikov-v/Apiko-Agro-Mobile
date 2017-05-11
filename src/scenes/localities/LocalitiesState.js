// Initial State
const initialState = [];

// Actions
export const INIT_LOCALITIES = 'INIT_LOCALITIES';

// Action creators
export const initLocalities = localities => ({ type: INIT_LOCALITIES, localities });

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_LOCALITIES:
      return action.localities;
    default:
      return state;
  }
};
