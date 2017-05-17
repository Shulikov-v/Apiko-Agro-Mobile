import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import { translate } from 'react-native-translate';

const ProfileInfoItem = ({ fieldName, value }) => (
  <View>
    <Text style={styles.infoItemLabel}>{translate(fieldName)}</Text>
    <Text style={styles.infoItemContent}>{value}</Text>
  </View>
);

ProfileInfoItem.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const ProfileView = ({ email, fullName }) => (
  <View style={styles.profileContainer}>
    <Card containerStyle={styles.cardContainer}>

      <ProfileInfoItem fieldName="email" value={email} />

      <Divider style={styles.divider} />

      <ProfileInfoItem fieldName="full_name" value={fullName} />

    </Card>
  </View>
);

ProfileView.propTypes = {
  email: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  profileContainer: { padding: 15 },
  cardContainer: { borderRadius: 5 },
  infoItemLabel: { fontSize: 12 },
  infoItemContent: { fontSize: 18, fontWeight: 'bold' },
  divider: { marginTop: 10, marginBottom: 10 },
});


export default ProfileView;
