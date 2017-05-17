import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Text, Icon } from 'react-native-elements';

import colors from '../styles/colors';

const FilterLocalityItem = ({
                        locality,
                        setActiveLocality,
                        toggleLocalitiesFilter,
                        mapFilter,
                      }) => {
  const LocalityItemComponent = () => (
    <View style={styles.localityItemContainer}>
      <Text style={styles.localityItemHeader}>{locality.name}</Text>
      <View style={styles.localityItemView}>
        <Icon
          name={mapFilter.fields[locality._id] ? 'map' : 'map-o'}
          type="font-awesome"
          color={colors.gray}
          size={14}
          onPress={() => toggleLocalitiesFilter(locality._id)}
          containerStyle={styles.mapIcon}
        />
        <Icon
          name={mapFilter.activeLocality === locality._id ? 'eye' : 'eye-slash'}
          type="font-awesome"
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

  return (
    <ListItem
      component={LocalityItemComponent}
      hideChevron
    />
  );
};

FilterLocalityItem.propTypes = {
  locality: PropTypes.object.isRequired,
  setActiveLocality: PropTypes.func.isRequired,
  toggleLocalitiesFilter: PropTypes.func.isRequired,
  mapFilter: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  localityItemContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomColor: colors.pastel,
    borderBottomWidth: 1,
    backgroundColor: colors.transparent,
    flex: 1,
    flexDirection: 'row',
  },
  localityItemHeader: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: colors.darkerGray,
    marginLeft: 10,
    flex: 2,
  },
  localityItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mapIcon: {
    paddingRight: 8,
  },
});

export default FilterLocalityItem;
