import R from 'ramda';
import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';

const FieldsView = ({
                      showModal,
                      setModalData,

                      fields,
                      mapFilter,
                      getFieldInfoById,
                      getColorForField,
                    }) => {
  const getFormattedCoords = coords =>
    coords.map(cord => ({ latitude: cord.lat, longitude: cord.lng }));
  const getCenterCoords = (coords) => {
    const allX = coords.map(coord => coord.lat);
    const allY = coords.map(coord => coord.lng);

    const xmax = Math.max(...allX);
    const ymax = Math.max(...allY);

    const xmin = Math.min(...allX);
    const ymin = Math.min(...allY);

    const xcenter = xmin + (xmax - xmin) / 2;
    const ycenter = ymin + (ymax - ymin) / 2;

    return { latitude: xcenter, longitude: ycenter };
  };
  const showModalWithData = fieldId => () => {
    showModal(true);
    setModalData({ ...getFieldInfoById(fieldId), type: 'field' });
  };

  const getPolygonForField = (field, i) =>
    mapFilter.fields[field.localityId] ? (
      <View key={i}>
        <MapView.Polygon
          coordinates={getFormattedCoords(field.coordinates)}
          strokeColor={getColorForField(field.localityId, 'stroke')}
          fillColor={getColorForField(field.localityId, 'fill')}
          onPress={showModalWithData(field._id)}
        />
        <MapView.Marker
          onPress={null}
          coordinate={getCenterCoords(field.coordinates)}
        >
          <Text style={styles.fieldText}>{field.name}</Text>
        </MapView.Marker>
      </View>
    ) : null;

  return !R.isEmpty(fields) ? (
    <View>
      {fields.map(getPolygonForField)}
    </View>
  )
    : null;
};

FieldsView.propTypes = {
  showModal: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  mapFilter: PropTypes.object.isRequired,
  getFieldInfoById: PropTypes.func.isRequired,
  getColorForField: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  fieldText: { fontSize: 8, fontWeight: 'bold' },
});

export default FieldsView;

