import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button } from 'react-native-elements';

const ActivePolygonModal = ({ isModalVisible, activePolygon, showPolygonModal, setActivePolygon }) => (
  <Modal isVisible={isModalVisible} backdropOpacity={0.2} style={styles.bottomModal}>
    <Card>
      <Text>Cadastral number: {activePolygon.cadastralNumber}</Text>
      <Text>Square: {activePolygon.square}</Text>
      <Text>LocalityName: {activePolygon.localityName}</Text>
      <Button
        title='Close'
        onPress={() => {
          showPolygonModal(false);
          setActivePolygon({
            cadastralNumber: '',
            square: '',
            localityName: ''
          });
        }}
      />
    </Card>
  </Modal>
);

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
  }
});

export default ActivePolygonModal;
