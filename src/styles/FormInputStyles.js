import { StyleSheet } from 'react-native';
import normalize from '../utils/normalizeText';
import colors from './common/colors';

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
    marginRight: 15,
  },
  labelStyle: {
    marginTop: 15,
    marginBottom: 1,
    color: colors.secondaryText,
    fontSize: normalize(11),
  },
  labelOnErrorStyle: {
    color: colors.error,
  },
  inputContainerStyle: {
    borderBottomColor: colors.divider,
    borderBottomWidth: 1,
    marginBottom: 2,
  },
  inputContainerOnErrorStyle: {
    borderBottomColor: colors.error,
  },
  inputStyle: {
    color: colors.primaryText,
    fontSize: normalize(14),
    paddingVertical: 0,
  },
  errorTextStyle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: normalize(12),
    color: colors.error,
  },
});

export default styles;
