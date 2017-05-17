import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const Fields = ({ fields }) => (
  <View>
    <Text>Fields</Text>
  </View>
);

Fields.propTypes = {
  fields: PropTypes.object.isRequired,
};

export default Fields;
