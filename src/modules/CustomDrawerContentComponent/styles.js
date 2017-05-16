import { Dimensions } from 'react-native';
import normalize from '../../utils/normalizeText';
import colors from '../../styles/colors';

const deviceScreen = Dimensions.get('window');
const borderWidth = 0.5;
const headerStyle = {
  height: 160,
  width: deviceScreen.width * 0.8,
};

const resetBorder = {
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
};

const styles = {
  rootStyle: {
    flex: 1,
  },
  drawer: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  main: {
    paddingLeft: 3,
  },
  headerStyle,
  linkListStyle: {
    flex: 1,
    marginTop: 0,
    ...resetBorder,
    borderRightWidth: borderWidth,
    borderRightColor: colors.divider,
  },
  linkStyle: {
    ...resetBorder,
  },
  textStyle: {
    color: colors.secondaryText,
    paddingLeft: 10,
    fontSize: normalize(16),
  },
  titleWrapperStyle: {
    position: 'absolute',
    ...headerStyle,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  titleStyle: {
    color: colors.white,
    fontSize: normalize(24),
  },
};

export default styles;
