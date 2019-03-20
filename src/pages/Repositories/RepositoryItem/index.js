import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repo }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{repo.full_name}</Text>

    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon name="star" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{repo.stargazers_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="code-fork" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{repo.forks_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="eye" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{repo.watchers_count}</Text>
      </View>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
