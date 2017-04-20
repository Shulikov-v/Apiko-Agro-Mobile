import React from 'react';
import { View } from 'react-native';
import { DrawerView } from 'react-navigation';

import DrawerLogo from './DrawerLogo';

const CustomDrawerContentComponent = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerLogo />

      <DrawerView.Items {...props} />
    </View>
  )
};

export default CustomDrawerContentComponent;
