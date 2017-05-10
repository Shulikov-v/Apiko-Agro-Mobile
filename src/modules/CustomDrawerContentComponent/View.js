import React from 'react';
import { View, Share } from 'react-native';
import { List, Divider } from 'react-native-elements';

import { get } from '../../utils/api';
import apiAdresses from '../../constants/apiAddresses';


import DrawerLogo from '../../components/DrawerLogo';
import scenes from '../../constants/scenesKeys';

import styles from '../../styles/NavigationDrawerStyles';

import {
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
  'Invite participant',
  'send',
  async () => {
    const body = await get(apiAdresses.INVITE_LINK);

    Share.share({
      message: `Ви можете зареєструватися перейшовши за посиланням: ${body.link}`,
      title: 'Запрошення у додаток Apiko Agro',
    })
  }
);

const ProfilePageLink = ({ navigation }) => getLinkItem(
  getSceneTitle(profileLink),
  getSceneIconName(profileLink),
  () => goToScene(navigation, profileLink)
);

const ExitLink = ({ signOut }) => getLinkItem(
  'Exit',
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
