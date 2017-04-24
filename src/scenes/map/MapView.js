import React from 'react';
import { MapView }  from 'expo';
import { View } from 'react-native';

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

Map.propTypes = { };


export default Map;