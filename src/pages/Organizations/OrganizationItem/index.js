import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const OrganizationItem = ({ org }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: org.avatar_url }} />
    <Text style={styles.title}>{org.login}</Text>
  </View>
);

OrganizationItem.propTypes = {
  org: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
