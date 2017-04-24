import { StyleSheet } from 'react-native';
import normalize from '../utils/normalizeText';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  buttonStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
  linkStyle: {
    alignItems: 'center',
  },
  linkTextStyle: {
    fontSize: normalize(16),
  },
});

export default styles;
