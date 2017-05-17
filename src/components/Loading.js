import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { CircleSnail } from 'react-native-progress';

import colors from '../styles/colors';

const Loading = ({ size, color, thickness, containerStyle }) => (
  <View style={[styles.rootStyle, containerStyle]}>
    <CircleSnail
      size={size}
      color={color || colors.defaultPrimary}
      thickness={thickness}
    />
  </View>
);

Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  thickness: PropTypes.number,
  containerStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
