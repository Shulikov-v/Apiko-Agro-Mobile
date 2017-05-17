import React from 'react';
import { ListItem } from 'react-native-elements';
import { translate } from 'react-native-translate';

import colors from '../../styles/colors';
import styles from './styles';

const scenes = {
  MAP: 'MAP',
  ORGANIZATION: 'ORGANIZATION',
  DICTIONARIES: 'DICTIONARIES',
  PROFILE: 'PROFILE',
  SIGN_IN: 'SIGN_IN',
};


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
  },
};

const getSceneTitle = sceneKey => sceneOptionsMap[sceneKey].title;

const getSceneIconName = sceneKey => sceneOptionsMap[sceneKey].icon;

const goToScene = (navigation, sceneKey) => {
  navigation.navigate(getSceneTitle(sceneKey));
};

const getLinkItem = (title, icon, onPress) => (
  <ListItem
    containerStyle={styles.linkStyle}
    title={translate(title)}
    titleStyle={styles.textStyle}
    leftIcon={{
      name: icon,
      color: colors.defaultPrimary,
    }}
    hideChevron
    onPress={onPress}
  />
);

export {
  scenes,
  goToScene,
  getLinkItem,
  getSceneTitle,
  getSceneIconName,
};
