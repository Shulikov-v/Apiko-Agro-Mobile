import React from 'react';
import { StyleSheet } from 'react-native';

import HamburgerIcon from '../../components/HamburgerIcon';
import FilterIcon from '../../components/FilterIcon';
import colors from '../../styles/common/colors';

const defaultHeaderConfig = (navigation, sceneTitle) => ({
  left: <HamburgerIcon navigation={navigation} />,
  right: sceneTitle === 'Map' ? <FilterIcon /> : null,
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
      header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation, sceneTitle))
    }
  }
}
