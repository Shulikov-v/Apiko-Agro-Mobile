import React from 'react';
import { MapView }  from 'expo';
import { View, StyleSheet } from 'react-native';

import Fields from './Fields/FieldsContainer';
import Polygons from './Polygons/PolygonsContainer';

import MapInfoModal from '../../components/MapInfoModal';
import FiltersModal from './FiltersModalContainer';

const Map = ({
               initialRegion,

               showModal,
               setModalData,
               modalData,
               isModalVisible,
             }) => {
  return(
  <View style={styles.container}>

    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      mapType='terrain'
    >
      <Fields
        showModal={showModal}
        setModalData={setModalData}
      />
      <Polygons
        showModal={showModal}
        setModalData={setModalData}
      />
    </MapView>

    <MapInfoModal
      showModal={showModal}
      modalData={modalData}
      setModalData={setModalData}
      isModalVisible={isModalVisible}
    />
    <FiltersModal />

  </View>
)};

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
