import R from 'ramda';
import React from 'react';
import { View } from 'react-native';
import { MapView }  from 'expo';

import colors from '../../../styles/colors';

const PolygonsView = ({
                        showModal,
                        setModalData,

                        polygons,
                        getPolygonInfoById,
                      }) => {
  const getFormattedCoords = coords =>
    coords.map(cord => ({latitude: cord.lat, longitude: cord.lng}));
  const showModalWithData = polygonId => () => {
    showModal(true);
    setModalData({ ...getPolygonInfoById(polygonId), type: 'polygon' });
  };

  const strokeColor = colors.almostDark + colors.opacity.half;
  const fillColor = colors.darkGray + colors.opacity.aLittle;

  const getPolygon = (polygon, i) => (
    <MapView.Polygon
      key={i}
      coordinates={getFormattedCoords(polygon.coordinates)}
      strokeColor={strokeColor}
      fillColor={fillColor}
      onPress={showModalWithData(polygon._id)}
    />
  );
  return !R.isEmpty(polygons) ? (
    <View>
      {polygons.map(getPolygon)}
    </View>
  )
    : null;

};

export default PolygonsView;


