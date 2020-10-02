import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getUser } from '../redux/action/UserAction'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : {}
    }
  }

  componentDidMount() {
    this.getData();
    // console.log('auth redux', this.props.auth) 
    // check first: position/property name's of auth data value using console.log
    console.log('Props.auth.data nya di Profile', this.props.auth.data);
    this.props.getUserListData(this.props.auth.data)
    console.log('Props getUserListData nya di Profile', this.props.getUserListData(this.props.auth.data));
  }

  getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@token');
      // await this.setState({ token:token})
      // console.log('This is token sayang', data);
      console.log('Props Auth dari mapStateToProps di Profile', this.props.auth)
      console.log('Props User dari mapStateToProps di Profile', this.props.user)
    } catch (e) {
      console.log('No token provided');
    }
  };

  async handleLogout() {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  }

  static navigationOptions = {
    title: 'Detail Profile',
    headerStyle: {
      backgroundColor: '#57BC90'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    console.disableYellowBox = true
    console.log('State User di Profile', this.props.user)
    console.log('Props.user.data.name di Profile', this.props.user.data.name);
    return (
      <Container>
        <Header style={{ backgroundColor: '#FDFDFD' }}>
          <Right>
            <TouchableOpacity
              onPress={() => this.handleLogout()}
              style={{ backgroundColor: '#FDFDFD', marginRight: 20 }}>
              <Icon name="md-log-out" style={{ color: '#015249' }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'
                    }}
                  />
                  {/* <Text style={styles.userInfo}>{this.props.navigation.state.params.email} </Text> */}
                  <Text style={styles.userInfo}>{this.props.user.data.name} </Text>
                </View>
                <View
                  style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
                />
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 20,
    color: '#015249'
  },
  header: {
    backgroundColor: '#ffffff'
  },
  headerContent: {
    padding: 30,
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: '#015249',
    fontWeight: '600'
  },
  userInfo: {
    fontSize: 16,
    color: '#015249',
    fontWeight: '600'
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    // getUserListData is the name our created at this time
    getUserListData : (data) => { 
      // console.log('Ini data dari getUserListData di mapDispatchToProps', data);
      dispatch(getUser(data))
      // console.log('Ini data dispatch di mapDispatchToProps', dispatch(getUser(data)));
      // console.log('Ini data getUser di dispatch-mapDispatchToProps', getUser(data));
      // console.log('Ini data dari dispatch-getUser-mapDispatchToProps', data);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
