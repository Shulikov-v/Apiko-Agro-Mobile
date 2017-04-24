import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text, Card } from 'react-native-elements'

const OrganizationView = ({organization}) => (
  <View>
    <View style={{ marginTop: 10, padding: 15 }}>
      <Text h3>{organization.name}</Text>

    </View>

    <Card title="Населені пункти">
    <List containerStyle={{ marginTop: 0 }}>
      {
        organization.localities.map((l, i) => (
          <ListItem
            key={i}
            title={l}
            hideChevron={true}
          />
        ))
      }
    </List>
    </Card>
  </View>
);

OrganizationView.propTypes = {};


export default OrganizationView;
