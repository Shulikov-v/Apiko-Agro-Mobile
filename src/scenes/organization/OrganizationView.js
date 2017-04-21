import React, { PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const OrganizationView = () => (
  <View>
    <Text>Organization page</Text>
  </View>
);

OrganizationView.propTypes = {
  navigate: PropTypes.func.isRequired
};


export default OrganizationView;
