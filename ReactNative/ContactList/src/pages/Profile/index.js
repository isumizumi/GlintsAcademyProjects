import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Profile = ({navigation}) => {
  console.disableYellowBox = true;

  return (
    <View style={styles.page}>
      <View style={styles.bg}>
        <Image
          source={require('../../assets/images/Me.jpeg')}
          style={styles.pic}
        />
        <Text style={styles.title}>Isumi Karina</Text>
      </View>
      <View style={styles.bgInfo} />
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.text}>Date of birth</Text>
          <Text style={styles.text}>February</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Gender</Text>
          <Text style={styles.text}>Woman</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Hobby</Text>
          <Text style={styles.text}>Secret</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Phone Number</Text>
          <Text style={styles.text}>081********</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>isumi.karina72@gmail.com</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Gitlab</Text>
          <Text style={styles.text}>@isumizumi</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  bg: {
    height: '40%',
    width: '100%',
    backgroundColor: '#3EC6FF',
    alignItems: 'center',
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: '15%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '5%',
    marginBottom: '5%',
  },
  bgInfo: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    height: '30%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    top: '35%',
    left: '7.5%',
    right: '7.5%',
    position: 'absolute',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    elevation: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});

export default Profile;
