import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconContactActive,
  IconContact,
  IconProfileActive,
  IconProfile,
} from '../../../assets/icon';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Contact') {
      return active ? <IconContactActive /> : <IconContact />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconContactActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 10,
    color: active ? 'blue' : 'black',
    marginTop: 4,
    fontFamily: 'Nunito-SemiBold',
  }),
});
