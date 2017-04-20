// Initial state
const initialState = {
  value: 0,
  loading: false
};

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';

// Action creators
export function increment() {
  return { type: INCREMENT };
}

export function reset() {
  return { type: RESET };
}

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return {...state, value: state.value + 1};

    case RESET:
      return initialState;

    default:
      return state;
  }
}
