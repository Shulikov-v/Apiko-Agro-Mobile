import React from 'react';
import { StyleSheet } from 'react-native';

import HamburgerIcon from '../../components/HamburgerIcon';
import FilterIcon from '../../components/FilterIcon';
import colors from '../../styles/colors';

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

// Need to cheat because somehow navigator loader before all other,
// create-react-native-app did`t allow to modify index.js file,
// where translation must be connected
const translation = {
  "Map": "Мапа",
  "Organization": "Організація",
  "Dictionaries": "Довідники",
  "Profile": "Профіль",
  "Apiko Agro": "Apiko Agro"
};

export default function getNavigationOptionsByScene(sceneTitle) {
  return {
    navigationOptions: ({ navigation, screenProps }) => ({
      title: translation[sceneTitle],

      headerLeft: <HamburgerIcon navigation={navigation} />,
      headerRight: sceneTitle === 'Map' ? <FilterIcon /> : null,
      headerStyle: styles.bar,
      headerTitleStyle: styles.titleStyle,
    })
  }


  // return ({ naviganion, screenProps }) => ({
  //   navigationOptions: {
  //     title: translation[sceneTitle],
  //     header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation, sceneTitle))
  //   }
  // })
  // return {
  //   navigationOptions: {
  //     title: translation[sceneTitle],
  //     header: (navigation, defaultHeader) => (defaultHeaderConfig(navigation, sceneTitle))
  //   }
  // }
}
