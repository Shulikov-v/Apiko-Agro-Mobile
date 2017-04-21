import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import normalize from '../utils/normalizeText';
import colors from '../styles/common/colors';

const deviceScreen = Dimensions.get('window');
const coverImage = require('../images/pattern.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    height: 160,
    width: deviceScreen.width * 0.8,
  },
  titleStyle: {
    color: colors.white,
    fontSize: normalize(24),
  },
  titleWrapperStyle: {
    position: 'absolute',
    height: 160,
    width: deviceScreen.width * 0.8,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

const DrawerLogo = () => (
  <View>
    <Image
      style={styles.headerStyle}
      source={coverImage}
    />
    <View style={[styles.headerStyle, styles.titleWrapperStyle]}>
      <Text style={styles.titleStyle}>
        APIKO AGRO
      </Text>
    </View>
  </View>
);

export default DrawerLogo;
