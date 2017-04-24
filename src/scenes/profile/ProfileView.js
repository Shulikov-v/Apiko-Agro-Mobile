import React from 'react';
import { View, Text } from 'react-native';

const ProfileView = ({ email, fullName }) => (
  <View>
    <Text>Profile page</Text>
    <Text>{email}</Text>
    <Text>{fullName}</Text>
  </View>
);

ProfileView.propTypes = { };


export default ProfileView;
