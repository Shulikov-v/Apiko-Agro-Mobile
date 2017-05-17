import React, { PropTypes } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button, Text } from 'react-native-elements';
import { translate } from 'react-native-translate';

import FilterDepartmentList from './FilterDepartmentList';

const FiltersModal = ({
                        mapFilter,
                        departments,
                        toggleModal,
                        toggleLocalitiesFilter,
                        setActiveLocality,
}) => (
  <Modal
    isVisible={mapFilter.isOpen}
    backdropOpacity={0.2}
    style={styles.topModal}
    animationIn="slideInDown"
    animationOut="slideOutUp"
  >
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.topModalView}>
          <Text h3>{translate('departments')}</Text>
        </View>
        <FilterDepartmentList
          departments={departments}
          toggleLocalitiesFilter={toggleLocalitiesFilter}
          setActiveLocality={setActiveLocality}
          mapFilter={mapFilter}
        />
        <Button
          title={translate('close')}
          onPress={() => toggleModal()}
          buttonStyle={styles.closeButton}
        />
      </Card>
    </ScrollView>
  </Modal>
);

FiltersModal.propTypes = {
  mapFilter: PropTypes.object,
  departments: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleLocalitiesFilter: PropTypes.func.isRequired,
  setActiveLocality: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  topModal: { justifyContent: 'flex-start' },
  topModalView: { alignItems: 'center' },

  cardContainer: { borderRadius: 3 },
  closeButton: { marginTop: 10, height: 45, borderRadius: 3 },
});

export default FiltersModal;
