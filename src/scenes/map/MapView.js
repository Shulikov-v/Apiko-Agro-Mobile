import React from 'react';
import R from 'ramda';
import { MapView }  from 'expo';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button } from 'react-native-elements';

import styles from './MapViewStyles';

const Map = ({
               initialRegion,
               fields,
               getFieldInfoById,
               getColorForField,
               isModalVisible,
               showModal,
               activeField,
               setActiveField
}) => {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        mapType='terrain'
      >
        {!R.isEmpty(fields) ?
          fields.map((field, i) => (
            <MapView.Polygon
              key={i}
              coordinates={field.coordinates.map(cord => ({ latitude: cord.lat, longitude: cord.lng }))}
              strokeColor={getColorForField(field.localityId, 'stroke')}
              fillColor={getColorForField(field.localityId, 'fill')}
              onPress={() => {
                setActiveField(getFieldInfoById(field._id));
                showModal(true);
              }}
            />
          ))
          : null}
      </MapView>
      <Modal isVisible={isModalVisible} backdropOpacity={0.2} style={styles.bottomModal}>
        <Card>
          <Text>Name: {activeField.name}</Text>
          <Text>Square: {activeField.square}</Text>
          <Text>LocalityName: {activeField.localityName}</Text>
            <Button
              title='Close'
              onPress={() => {
                showModal(false);
                setActiveField({ name: '', square: 0, localityName: 0 });
              }}
            />
        </Card>
      </Modal>
    </View>
  )
};

Map.propTypes = { };


export default Map;
