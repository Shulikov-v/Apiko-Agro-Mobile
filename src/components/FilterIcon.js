import React, { PropTypes } from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { toggleFilterModal } from '../scenes/map/MapViewState';

import colors from '../styles/colors';

const FilterIcon = ({ toggleFilterModal }) => (
  <TouchableNativeFeedback
    onPress={toggleFilterModal}
  >
    <Icon name="filter" size={30} color={colors.white} style={styles.icon} />
  </TouchableNativeFeedback>
);

FilterIcon.propTypes = {
  toggleFilterModal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});


export default connect(null, {
  toggleFilterModal,
})(FilterIcon);
