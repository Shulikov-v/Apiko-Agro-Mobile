import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button } from 'react-native-elements';
import { translate } from 'react-native-translate';

const MapInfoModal = ({
                    showModal,
                    modalData,
                    setModalData,
                    isModalVisible,
                  }) => {
  if (!modalData) return null;
  return(
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0.2}
      style={styles.bottomModal}
    >
      <Card>
        {modalData.type === 'field' ? (
          <View>
            <Text>{translate('field_name')}: {modalData.name}</Text>
            <Text>{translate('square')}: {modalData.square}</Text>
            <Text>{translate('locality_name')}: {modalData.localityName}</Text>
          </View>
        ) : ( // type === 'polygon'
          <View>
            <Text>{translate('cadastral_number')}: {modalData.cadastralNumber}</Text>
            <Text>{translate('square')}: {modalData.square}</Text>
            <Text>{translate('locality_name')}: {modalData.localityName}</Text>
          </View>
        )}

        <Button
          title={translate('close')}
          onPress={() => {
            showModal(false);
            setModalData(null);
          }}
        />
      </Card>
    </Modal>
  )
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
  }
});

export default MapInfoModal;
