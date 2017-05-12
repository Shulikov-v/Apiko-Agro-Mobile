import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button, Divider } from 'react-native-elements';
import { translate } from 'react-native-translate';

const InfoString = ({ fieldName, value }) => (
  <View style={[ styles.cardCenter, styles.rowDirection ]}>
    <Text style={styles.labelSize}>{translate(fieldName)}: </Text>
    <Text style={styles.textBold}>{value}</Text>
  </View>
);

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
      <Card containerStyle={styles.cardContainer}>
        {modalData.type === 'field' ? (
          <View style={styles.cardCenter}>

            <InfoString fieldName="field_name" value={modalData.name} />
            <InfoString fieldName="square" value={modalData.square} />
            <InfoString fieldName="locality_name" value={modalData.localityName} />

          </View>
        ) : ( // type === 'polygon'
        <View style={styles.cardCenter}>

          <InfoString fieldName="cadastral_number" value={modalData.cadastralNumber} />
          <InfoString fieldName="square" value={modalData.square} />
          <InfoString fieldName="locality_name" value={modalData.localityName} />

        </View>
        )}

        <Button
          title={translate('close')}
          onPress={() => {
            showModal(false);
            setModalData(null);
          }}

          buttonStyle={styles.closeButton}
        />
      </Card>
    </Modal>
  )
};

const styles = StyleSheet.create({
  bottomModal: { justifyContent: 'flex-end' },
  cardContainer: { borderRadius: 5 },
  cardCenter: { alignItems: 'center' },
  rowDirection: { flexDirection: 'row' },
  labelSize: { fontSize: 12 },
  textBold: { fontWeight: 'bold' },
  closeButton: { marginTop: 10, height: 45, borderRadius: 3 }

});

export default MapInfoModal;
