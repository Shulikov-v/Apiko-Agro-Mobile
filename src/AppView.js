import React, { PropTypes } from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

import NavigatorViewContainer from './modules/navigator/NavigatorViewContainer';

const AppView = ({ isReady }) => (
  isReady ? (
    <View style={styles.fillAll}>
      <StatusBar barStyle="light-content" backgroundColor="#1976D2" />
      <NavigatorViewContainer />
    </View>
  ) : (
    <View style={styles.fillAll}>
      <ActivityIndicator
        style={styles.centered}
        size="large"
      />
    </View>
  )
);

AppView.propTypes = {
  isReady: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  fillAll: { flex: 1 },
  centered: { flex: 1, alignSelf: 'center' },
});

export default AppView;
