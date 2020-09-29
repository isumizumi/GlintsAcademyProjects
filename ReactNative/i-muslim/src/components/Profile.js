import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Right,
  Content,
  Text,
  Body,
  CardItem,
  Card,
  Icon,
  Fab,
  Tab, 
  Tabs
} from "native-base";
import { connect } from "react-redux";
import { getUser } from "../redux/action/user";
import AsyncStorage from "@react-native-community/async-storage";
import ImagePicker from "react-native-image-picker";
import axios from "axios"

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      token: "",
      active: 'true',
      photo: null,
      filePath: {},
    };
  }

  static navigationOptions = {
    title: "Profile",
    tabBarLabel: "Profile"
  };

  componentDidMount() {
    this.getData();
    this.props.getUserData(this.props.auth.token);
  }

  getData = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      await this.setState({ token: token });
    } catch (e) {
      console.log("no token provided");
    }
  };

  async handleLogout() {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Home");
  }
  handleChoosePhoto = async () => {
    const options = {
      noData: true
    };

   ImagePicker.launchImageLibrary(options, photo =>{

   if (photo.uri) {
    const form = new FormData();
    form.append("file", {
      uri: photo.uri,
      name: photo.fileName,
      type: photo.type
    });
      axios.patch(
        "http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/users/image",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": this.props.auth.token
          }
        }
      ).then((response)=>{
        console.log(response.data)
      }).catch(err=>{
        console.log(err.response)
      })
      
     
  }
   });
  };


  render() {
    console.log(this.props.user);
    return (
      <Container>
        <Header transparent>
          <Right>
            <TouchableOpacity
              onPress={() => this.handleLogout()}
              style={{ backgroundColor: "#FDFDFD", marginRight: 20 }}
            >
              <Icon
                type="MaterialCommunityIcons"
                name="logout"
                style={{ color: "#21ADEE" }}
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <View style={style.imageView}>
              <Image
                source={
                  this.props.user.data.image
                    ? { uri: this.props.user.data.image }
                    : require("../assets/person_unknown.png")
                }
                style={{ width: 110, height: 110, borderRadius: 40 }}
              />
            </View>

            <View style={style.line}/>
            
            <Fab
              active={this.state.active}
              style={{ backgroundColor: '#21ADEE' }}
              position='topRight'
              containerStyle={{top: '50%'}}
              onPress={this.handleChoosePhoto}
            >
              <Icon type='Ionicons' name='camera' />
            </Fab>
            <View style={style.info}>
                <Text>{this.props.user.data.username}</Text>
                <Text>{this.props.user.data.email}</Text>
            </View>
          </View> 
          <Tabs>
            <Tab 
              heading="Acara yang diikuti" 
              tabStyle={{backgroundColor: '#FDFDFD'}} 
              textStyle={{color: '#21ADEE'}} 
              activeTabStyle={{backgroundColor: '#21ADEE'}} 
              activeTextStyle={{color: '#ffff', fontWeight: 'normal'}}>
              <Card>
                <CardItem header>
                  <Text>Batam</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Prince ali of ababwa</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>2 Agustus 2019</Text>
                </CardItem>
              </Card>
            </Tab>
            <Tab 
              heading="Acara yang diadakan"
              tabStyle={{backgroundColor: '#FDFDFD'}} 
              textStyle={{color: '#21ADEE'}} 
              activeTabStyle={{backgroundColor: '#21ADEE'}} 
              activeTextStyle={{color: '#ffff', fontWeight: 'normal'}}>
              <Card>
                <CardItem header>
                  <Text>Batam</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Prince ali of ababwa</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>2 Agustus 2019</Text>
                </CardItem>
              </Card>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  imageView: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    margin: 5,
    borderRadius: 40
  },
  buttonEventsContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 24,
    marginBottom: 24
  },
  buttonView: {
    flex: 1,
    alignSelf: "stretch",
    marginHorizontal: 4
  },
  buttonEvent: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 35
  },
  line: {
    borderBottomColor: '#0085AF', 
    borderBottomWidth: 1, 
    marginTop: 20
  },
  info: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 20
  }
});

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getUserData: token => dispatch(getUser(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
