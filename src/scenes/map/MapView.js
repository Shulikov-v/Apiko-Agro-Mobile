import React from 'react';
import R from 'ramda';
import { MapView }  from 'expo';
import { View, StyleSheet } from 'react-native';

import ActiveFieldModal from '../../components/ActiveFieldModal';
import FiltersModal from './FiltersModalContainer';

const Map = ({
               fields,
               mapFilter,
               initialRegion,
               getFieldInfoById,
               getColorForField,


               // ActiveFieldModal
               activeField,
               setActiveField,
               showModal,
               isModalVisible,
             }) => (
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
            coordinates={field.coordinates.map(cord => ({latitude: cord.lat, longitude: cord.lng}))}
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
    <ActiveFieldModal
      activeField={activeField}
      setActiveField={setActiveField}
      showModal={showModal}
      isModalVisible={isModalVisible}
    />
    <FiltersModal
      mapFilter={mapFilter}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
});

Map.propTypes = { };


export default Map;
