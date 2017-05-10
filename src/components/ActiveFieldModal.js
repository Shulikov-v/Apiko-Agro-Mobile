import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button } from 'react-native-elements';

const ActiveFieldModal = ({ isModalVisible, activeField, showModal, setActiveField }) => (
  <Modal isVisible={isModalVisible} backdropOpacity={0.2} style={styles.bottomModal}>
    <Card>
      <Text>Name: {activeField.name}</Text>
      <Text>Square: {activeField.square}</Text>
      <Text>LocalityName: {activeField.localityName}</Text>
      <Button
        title='Close'
        onPress={() => {
          showModal(false);
          setActiveField({ name: '', square: 0, localityName: 0 });
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

export default ActiveFieldModal;
