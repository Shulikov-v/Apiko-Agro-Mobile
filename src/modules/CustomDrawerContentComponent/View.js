import React from 'react';
import { View, Share } from 'react-native';
import { List, Divider } from 'react-native-elements';
import { translate } from 'react-native-translate';

import { get, apiEndpoint } from '../../utils/api';


import DrawerLogo from '../../components/DrawerLogo';

import styles from './styles';

import {
  scenes,
  goToScene,
  getLinkItem,
  getSceneTitle,
  getSceneIconName
} from './drawerHelpers';

const mainLinksBlock = [
  scenes.MAP,
  scenes.ORGANIZATION,
  scenes.DICTIONARIES
];
const profileLink = scenes.PROFILE;
const exitLink = scenes.SIGN_IN;

const InviteParticipant = () => getLinkItem(
  'invite_participant',
  'send',
  async () => {
    const body = await get(apiEndpoint.INVITE_LINK);

    Share.share({
      title: translate('share_message_title'),
      message: `${translate('share_message')}: ${body.link}`
    })
  }
);

const ProfilePageLink = ({ navigation }) => getLinkItem(
  getSceneTitle(profileLink),
  getSceneIconName(profileLink),
  () => goToScene(navigation, profileLink)
);

const ExitLink = ({ signOut }) => getLinkItem(
  'exit',
  getSceneIconName(exitLink),
  () => signOut()
);

const renderLinkToScene = navigation => (sceneKey, i) => (
  <View key={i}>
    {getLinkItem(
      getSceneTitle(sceneKey),
      getSceneIconName(sceneKey),
      () => goToScene(navigation, sceneKey)
    )}
  </View>
);

const CustomDrawerContentComponent = ({ navigation, signOut }) => (
  <View style={styles.rootStyle}>
    <DrawerLogo />

    <List containerStyle={styles.linkListStyle}>
      {mainLinksBlock.map(renderLinkToScene(navigation))}
    </List>

    <Divider />

    <InviteParticipant />
    <ProfilePageLink
      navigation={navigation}
    />
    <ExitLink
      signOut={signOut}
    />
  </View>
);

export default CustomDrawerContentComponent;
