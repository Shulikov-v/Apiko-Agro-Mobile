import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, List } from 'react-native-elements';

import FilterLocalityItem from './FilterLocalityItem';

const FilterDepartmentList = ({
                          departments,
                          toggleLocalitiesFilter,
                          setActiveLocality,
                          mapFilter
                        }) => (
  <View>
    {
      departments.map((dep, i) => (
        <Card title={dep.name} key={i}>
          <List containerStyle={styles.departmentsListContainer}>
            {
              dep.localities.map((loc, i) =>
                <FilterLocalityItem
                  key={i}
                  locality={loc}
                  setActiveLocality={setActiveLocality}
                  toggleLocalitiesFilter={toggleLocalitiesFilter}
                  mapFilter={mapFilter}
                />
              )
            }
          </List>
        </Card>
      ))
    }
  </View>
);

const styles = StyleSheet.create({
  departmentsListContainer: { marginTop: 0 },
});

export default FilterDepartmentList;
