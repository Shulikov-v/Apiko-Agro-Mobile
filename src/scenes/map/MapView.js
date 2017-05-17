import React, { PropTypes } from 'react';
import { MapView } from 'expo';
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
             }) => (
               <View style={styles.container}>

                 <MapView
                   style={styles.map}
                   initialRegion={initialRegion}
                   mapType="terrain"
                   toolbarEnabled={false}
                   moveOnMarkerPress={false}
                   showsTraffic={false}
                   showsPointsOfInterest={false}
                   showsUserLocation
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
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

Map.propTypes = {
  initialRegion: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
  modalData: PropTypes.object,
  isModalVisible: PropTypes.bool.isRequired,
};


export default Map;
