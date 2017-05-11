import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button } from 'react-native-elements';
import { translate } from 'react-native-translate';

const ActivePolygonModal = ({ isModalVisible, activePolygon, showPolygonModal, setActivePolygon }) => (
  <Modal isVisible={isModalVisible} backdropOpacity={0.2} style={styles.bottomModal}>
    <Card>
      <Text>{translate('cadastral_number')}: {activePolygon.cadastralNumber}</Text>
      <Text>{translate('square')}: {activePolygon.square}</Text>
      <Text>{translate('locality_name')}: {activePolygon.localityName}</Text>
      <Button
        title={translate('close')}
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
