import React from 'react';
import { Share } from 'react-native';
import { ListItem } from 'react-native-elements';

import styles from '../../styles/NavigationDrawerStyles';
import colors from '../../styles/common/colors';

const InviteParticipant = () => (
  <ListItem
    containerStyle={styles.linkStyle}
    title='Invite participant'
    titleStyle={styles.textStyle}
    leftIcon={{
      name: 'send',
      color: colors.defaultPrimary,
    }}
    hideChevron={true}
    onPress={() => Share.share({ message: 'Invite participant.' })}
  />
);

export default InviteParticipant;
