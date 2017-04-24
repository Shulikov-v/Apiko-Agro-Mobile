import { Alert } from 'react-native';
import R from 'ramda';

export default function showErrorAlert(error) {
  let errorMessage = 'Something went wrong';
  let errorStatus = '';

  if (!R.isEmpty(error)) {
    if (R.is(String, error)) {
      errorMessage = error;
    } else if (R.has('message', error)) {
      const { message, code } = error;

      errorMessage = (R.is(String, message) && message);
      errorStatus = code;
    }
  }

  Alert.alert(`Error ${errorStatus}`, errorMessage);
};
