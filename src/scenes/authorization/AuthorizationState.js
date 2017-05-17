// eslint-disable-next-line react-native/split-platform-components
import { ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation';

import {
  setAuthenticationToken,
  clearAuthenticationToken,
} from '../../utils/authentication';
import { apiEndpoint, post } from '../../utils/api';


// Initial State
const initialState = {
  authorized: false,
  loading: false,
  error: null,
};

// Actions
const AJAX_AUTH_REQUEST = 'AJAX_AUTH_REQUEST';
const AJAX_AUTH_FAILURE = 'AJAX_AUTH_FAILURE';
const AJAX_AUTH_SUCCESS = 'AJAX_AUTH_SUCCESS';

const SIGN_OUT = 'SIGN_OUT';

// Action creators
const ajaxAuthRequest = () => ({ type: AJAX_AUTH_REQUEST });
const ajaxAuthSuccess = () => ({ type: AJAX_AUTH_SUCCESS });
const ajaxAuthFailure = error => ({ type: AJAX_AUTH_FAILURE, payload: error });

// Thunks
export function signIn({ email, password }) {
  return async function (dispatch) {
    dispatch(ajaxAuthRequest());

    const payload = { email, password };

    try {
      const response = await post(apiEndpoint.SIGN_IN, payload);
      const { user, token } = response;

      if (!user || !token) {
        dispatch(ajaxAuthFailure('Wrong response'));
        return;
      }

      await setAuthenticationToken(token);


      dispatch(ajaxAuthSuccess());

      dispatch(NavigationActions.navigate({ routeName: 'Preloader' }));
    } catch (err) {
      dispatch(ajaxAuthFailure(err));
    }
  };
}

export function signUp({ email, name, surname, password }) {
  return async function (dispatch) {
    dispatch(ajaxAuthRequest());

    const payload = { email, firstName: name, lastName: surname, password };

    try {
      const response = await post(apiEndpoint.SIGN_UP, payload);

      if (!response._id) {
        dispatch(ajaxAuthFailure('Wrong response'));
        return;
      }

      dispatch(ajaxAuthSuccess());
      ToastAndroid.show('Successfully signed up!', ToastAndroid.SHORT);

      dispatch(NavigationActions.navigate({ routeName: 'SignIn' }));
    } catch (err) {
      dispatch(ajaxAuthFailure(err));
    }
  };
}

export function signOut() {
  return async function (dispatch) {
    await clearAuthenticationToken();
    dispatch({ type: SIGN_OUT });

    dispatch(NavigationActions.navigate({ routeName: 'Authorization' }));
  };
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case AJAX_AUTH_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case AJAX_AUTH_SUCCESS:
      return {
        ...initialState,
        authorized: true,
      };
    case AJAX_AUTH_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      };
    case SIGN_OUT:
      return { ...initialState };
    default:
      return state;
  }
};
