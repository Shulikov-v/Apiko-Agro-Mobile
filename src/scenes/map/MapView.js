import React from 'react';
import R from 'ramda';
import { MapView }  from 'expo';
import { View, StyleSheet } from 'react-native';

import ActiveFieldModal from '../../components/ActiveFieldModal';
import ActivePolygonModal from '../../components/ActivePolygonModal';
import FiltersModal from './FiltersModalContainer';

const Map = ({
               fields,
               polygons,
               mapFilter,
               initialRegion,
               getFieldInfoById,
               getColorForField,

               // ActiveFieldModal
               activeField,
               setActiveField,
               showModal,
               isModalVisible,

               // ActivePolygonModal
               activePolygon,
               setActivePolygon,
               getPolygonInfoById,
               showPolygonModal,
               isPolygonModalVisible,
             }) => {
  console.log(polygons && polygons[0] && 'polygons loaded')
  return(
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      mapType='terrain'
    >
      {!R.isEmpty(fields) ?
        fields.map((field, i) => {
        return mapFilter.fields[field.localityId] ?
          <MapView.Polygon
            key={i}
            coordinates={field.coordinates.map(cord => ({latitude: cord.lat, longitude: cord.lng}))}
            strokeColor={getColorForField(field.localityId, 'stroke')}
            fillColor={getColorForField(field.localityId, 'fill')}
            onPress={() => {
              setActiveField(getFieldInfoById(field._id));
              showModal(true);
            }}
          /> : null;
      })
        : null}
      {!R.isEmpty(polygons) ?
        polygons.map((polygon, i) =>
          <MapView.Polygon
            key={i}
            coordinates={polygon.coordinates.map(cord => ({latitude: cord.lat, longitude: cord.lng}))}
            strokeColor={ '#27272780' } // 0.5 opacity
            fillColor={ '#5a5a5a32' }   // 0.2 opacity
            onPress={() => {
              setActivePolygon(getPolygonInfoById(polygon._id));
              showPolygonModal(true);
            }}
          />
        ) : null}
    </MapView>
    <ActiveFieldModal
      activeField={activeField}
      setActiveField={setActiveField}
      showModal={showModal}
      isModalVisible={isModalVisible}
    />
    <ActivePolygonModal
      activePolygon={activePolygon}
      setActivePolygon={setActivePolygon}
      showPolygonModal={showPolygonModal}
      isModalVisible={isPolygonModalVisible}
    />
    <FiltersModal
      mapFilter={mapFilter}
    />
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
