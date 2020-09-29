import React, { Component, Fragment } from 'react'
import { View, Image, StyleSheet,RefreshControl,TouchableOpacity } from 'react-native'
import { Icon, Button, Left, Container, Content, Input, Item, Card, CardItem, Text, Body, Thumbnail } from "native-base";
import { connect } from 'react-redux'
import * as types from '../redux/type/eventTypes'
import { getUser } from '../redux/action/user'
export class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.props.fetchEventData(this.props.auth.token)
    if (this.props.events.loading){
      this.setState({refreshing: true});
    }
    this.setState({refreshing: false});
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Event List',
      headerStyle: { marginTop: 24 },
      headerRight: (
        <View>

          <Button transparent
            onPress={() => navigation.navigate('newEvent')}
            title="Info"
            color="#fff"
          >
            <Icon name="add" />
          </Button>

        </View>
      )
    }
  };

  componentDidMount() {
    this.props.fetchEventData(this.props.auth.token)
    this.props.getUserData(this.props.auth.token)
  }

  render() {
    console.log('iniEvent', this.props.events.data)
    let eventItem = this.props.events.data.map((item, i) => {
      return (
        <Fragment key={i}>
        <TouchableOpacity style={{ flex: 1 }}
                          onPress={()=> this.props.navigation.navigate('EventItem', {itemId: item._id})}
        >
        <Card style={{ flex: 1 }}>
          <CardItem>
            <Left>
              <Thumbnail source={this.props.user.data.image? {uri: this.props.user.data.image} :require('../assets/person_unknown.png')} />
              <Body>
                <Text>{item.title}</Text>
                <Text note>{new Date(item.date).toDateString()} </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: item.fileLink ? item.fileLink : null }}
                style={styles.imageView} />
              <Text style={{ marginTop: 10 }}>
                {item.content}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>
              {item.address}
            </Text>
          </CardItem>
        </Card>
        </TouchableOpacity>
        </Fragment>
      );
    });



    return (
      <Container style={{ flex: 1 }}>
        <View style={{
          backgroundColor: '#65D4F9', justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Item style={styles.searchContainer}>
            <Input placeholder="Search" style={{ width: '100%' }} />
            <Icon name="search" style={{ paddingRight: 10 }} />

          </Item>
        </View>

        <Content refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
          {eventItem}
        </Content>

      </Container>
    )
  }
}


const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    marginVertical: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 200,
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
  events: state.event
})

const mapDispatchToProps = dispatch => {
  return {
    fetchEventData: (token) => dispatch({ type: types.REQUEST_EVENT_DATA, token }),
    getUserData: (token) => dispatch(getUser(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList)


