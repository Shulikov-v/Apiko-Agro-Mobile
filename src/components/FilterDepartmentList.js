import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, List } from 'react-native-elements';

import FilterLocalityItem from './FilterLocalityItem';

const getLocalitiesList = (localities, setActiveLocality, toggleLocalitiesFilter, mapFilter) => {
  const getFilterLocalityItem = (loc, i) => (
    <FilterLocalityItem
      key={i}
      locality={loc}
      setActiveLocality={setActiveLocality}
      toggleLocalitiesFilter={toggleLocalitiesFilter}
      mapFilter={mapFilter}
    />
  );


  return (
    <List containerStyle={styles.departmentsListContainer}>
      { localities.map(getFilterLocalityItem) }
    </List>
  );
};

const FilterDepartmentList = ({
                          departments,
                          toggleLocalitiesFilter,
                          setActiveLocality,
                          mapFilter,
                        }) => (
                          <View>
                            {departments.map((dep, i) => (
                              <Card title={dep.name} key={i} containerStyle={styles.cardContainer}>
                                {getLocalitiesList(dep.localities, setActiveLocality, toggleLocalitiesFilter, mapFilter)}
                              </Card>
      ))}
                          </View>
);

FilterDepartmentList.propTypes = {
  departments: PropTypes.array.isRequired,
  toggleLocalitiesFilter: PropTypes.func.isRequired,
  setActiveLocality: PropTypes.func.isRequired,
  mapFilter: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  departmentsListContainer: { marginTop: 0 },
  cardContainer: { borderRadius: 2 },
});

export default FilterDepartmentList;
