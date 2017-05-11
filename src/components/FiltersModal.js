import React from 'react';
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
                        setActiveLocality
}) => (
  <Modal
    isVisible={mapFilter.isOpen}
    backdropOpacity={0.2}
    style={styles.topModal}
    animationIn='slideInDown'
    animationOut='slideOutUp'
  >
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card>
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
          buttonStyle={styles.topModalCloseButton}
        />
      </Card>
    </ScrollView>
  </Modal>
);

const styles = StyleSheet.create({
  topModal: { justifyContent: 'flex-start' },
  topModalView: { marginTop: 10, padding: 15 },
  topModalCloseButton: { marginTop: 10 },
});

export default FiltersModal;
