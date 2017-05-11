import React, { PropTypes } from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

import NavigatorViewContainer from './modules/navigator/NavigatorViewContainer';

const AppView = ({ isReady }) => (
  isReady ? (
  <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <StatusBar />
    <NavigatorViewContainer />
  </View>
  ) : (
    <View style={{ flex: 1 }}>
      <ActivityIndicator
        style={styles.centered}
        size="large"
      />
    </View>
  )
);

AppView.propTypes = {
  isReady: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
