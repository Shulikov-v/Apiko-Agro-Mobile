import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { toggleFilterModal } from '../scenes/map/MapViewState';

import colors from '../styles/colors';

const FilterIcon = ({ navigation, toggleFilterModal }) => (
  <TouchableNativeFeedback
    onPress={toggleFilterModal}
  >
    <Icon name="filter" size={30} color={colors.white} style={styles.icon} />
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});



export default connect(null, {
  toggleFilterModal,
})(FilterIcon);
