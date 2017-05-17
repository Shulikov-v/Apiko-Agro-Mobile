import React from 'react';
import { View, StyleSheet } from 'react-native';

import Loading from '../../components/Loading';

const Preloader = () => (
  <View style={styles.centered}>
    <Loading size={60} thickness={5} containerStyle={styles.centered} />
  </View>
);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default Preloader;
