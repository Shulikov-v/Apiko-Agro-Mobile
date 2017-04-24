import React from 'react';
import { ListItem } from 'react-native-elements';

import colors from '../../styles/common/colors';
import styles from '../../styles/NavigationDrawerStyles';

import scenes from '../../constants/scenesKeys';

const sceneOptionsMap = {
  [scenes.MAP]: {
    title: 'Map',
    icon: 'map',
  },
  [scenes.ORGANIZATION]: {
    title: 'Organization',
    icon: 'people',
  },
  [scenes.DICTIONARIES]: {
    title: 'Dictionaries',
    icon: 'library-books',
  },
  [scenes.PROFILE]: {
    title: 'Profile',
    icon: 'account-circle',
  },
  [scenes.SIGN_IN]: {
    title: 'Authorization',
    icon: 'exit-to-app',
  }
};

const getSceneTitle = sceneKey => sceneOptionsMap[sceneKey].title;

const getSceneIconName = sceneKey => sceneOptionsMap[sceneKey].icon;

const goToScene = (navigation, sceneKey) => {
  navigation.navigate(getSceneTitle(sceneKey));
};

const getLinkItem = (title, icon, onPress) => (
  <ListItem
    containerStyle={styles.linkStyle}
    title={title}
    titleStyle={styles.textStyle}
    leftIcon={{
      name: icon,
      color: colors.defaultPrimary,
    }}
    hideChevron={true}
    onPress={onPress}
  />
);

export {
  goToScene,
  getLinkItem,
  getSceneTitle,
  getSceneIconName
};
