import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Text, Icon } from 'react-native-elements';

import colors from '../styles/colors';

const FilterLocalityItem = ({
                        locality,
                        setActiveLocality,
                        toggleLocalitiesFilter,
                        mapFilter
                      }) => {
  const LocalityItemComponent = () => (
    <View style={styles.localityItemContainer}>
      <Text style={styles.localityItemHeader}>{locality.name}</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Icon
          name={ mapFilter.fields[locality._id] ? 'map' : 'map-o' }
          type='font-awesome'
          color={colors.gray}
          size={14}
          onPress={() => toggleLocalitiesFilter(locality._id)}
          containerStyle={{ paddingRight: 8 }}
        />
        <Icon
          name={ mapFilter.activeLocality === locality._id ? 'eye' : 'eye-slash' }
          type='font-awesome'
          color={colors.gray}
          size={14}
          onPress={() => {
            if (mapFilter.activeLocality === locality._id) {
              setActiveLocality(null);
            } else {
              setActiveLocality(locality._id);
            }
          }}
        />
      </View>
    </View>
  );

  return(
    <ListItem
      component={LocalityItemComponent}
      hideChevron={true}
    />
  )
};

const styles = StyleSheet.create({
  localityItemContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
  },
  localityItemHeader: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#43484d',
    marginLeft: 10,
    flex: 2,
  }
});

export default FilterLocalityItem;
