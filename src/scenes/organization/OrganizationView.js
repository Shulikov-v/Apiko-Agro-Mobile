import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem, Text, Card } from 'react-native-elements';

const OrganizationView = ({ organization }) => {
  const getLocalityListItem = (l, i) => (
    <ListItem
      key={i}
      title={l}
      hideChevron
    />
  );

  return (
    <View>
      <View style={styles.container}>
        <Text h3>{organization.name}</Text>
      </View>

      <Card title="Населені пункти" containerStyle={styles.cardContainer}>
        <List containerStyle={styles.list}>
          { organization.localities.map(getLocalityListItem) }
        </List>
      </Card>
    </View>
  );
};

OrganizationView.propTypes = {
  organization: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: { marginTop: 10, padding: 15 },
  cardContainer: { borderRadius: 3 },
  list: { marginTop: 0 },
});

export default OrganizationView;
