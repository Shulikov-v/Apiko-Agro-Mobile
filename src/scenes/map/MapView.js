import { MapView }  from 'expo';
import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

import styles from './MapViewStyles';

const Map = () => (
  <View style ={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}
    />
  </View>
);

Map.propTypes = {
  navigate: PropTypes.func.isRequired
};


export default Map;
