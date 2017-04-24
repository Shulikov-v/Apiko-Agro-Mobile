import React from 'react';
import { StyleSheet } from 'react-native';

import HamburgerIcon from '../../components/HamburgerIcon';
import colors from '../../styles/common/colors';

const defaultHeaderConfig = (navigation) => ({
  left: <HamburgerIcon navigation={navigation} />,
  style: styles.bar,
  titleStyle: styles.titleStyle,
});

const styles = StyleSheet.create({
  bar: {
    elevation: 5,
    backgroundColor: colors.defaultPrimary,
  },
  titleStyle: {
    color: colors.white
  }
});


export default function getNavigationOptionsByScene(sceneTitle) {
  return {
    navigationOptions: {
      title: sceneTitle,
      header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation))
    }
  }
}
