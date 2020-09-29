import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios"
import {
  Textarea,
  Form,
  Input,
  Item,
  DatePicker,
  Button,
  Icon,
  Picker,
  Container,
  Content
} from "native-base";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class AddNewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      photo: null,
      picker: false,
      filePath: {},
      title: '',
      address: '',
      content: '',
      region: "",
      city: "",
      regionList: [],
      cityList: []
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  static navigationOptions = {
    headerTitle: "Event List",
    headerStyle: { marginTop: 24 }
  };

  handleChoosePhoto = async () => {
    const options = {
      noData: true
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
      let source = response;
      this.setState({
        filePath: source
      });
    });
  };

  onPressSubmit = async () => {
    console.log(this.props.auth.token)
    const form = new FormData();
    form.append("title", this.state.title);
    form.append("content", this.state.content);
    form.append("address", this.state.address);
    form.append("region", this.state.region)
    form.append("city", this.state.city)
    form.append("date", new Date(this.state.chosenDate).toISOString());
    form.append("file", {
      uri: this.state.photo.uri,
      name: this.state.photo.fileName,
      type: this.state.photo.type
    });
    try {
      const response = await axios.post(
        "http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/events",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": this.props.auth.token
          }
        }
      );
      this.props.navigation.navigate('Home')
    } catch (error) {
      console.error(error);
    }
  }
  fetchRegion = async ()=>{
    try {
      const response = await axios.get("http://battuta.medunes.net/api/region/id/all/?key=8aedb61cc873faeb65657e5989266e99");
      this.setState({
        regionList: response.data
      })

    } catch (error) {
      console.log(error);
    }
  }
  fetchCity = async (region) => {
    try {
      const response = await axios.get(`http://battuta.medunes.net/api/city/id/search/?region=${region}&key=8aedb61cc873faeb65657e5989266e99`);
      this.setState({
        cityList: response.data
      })

    } catch (error) {
      console.log(error.response);
    }
  }

  onValueChangeRegion = (value) =>{
    this.setState({
      region: value
    });
    if (value != ""){
      this.fetchCity(value)
    }
    
  }
  onValueChangeCity = (value) => {
    console.log('regcity', value)
    this.setState({
      city: value
    });
  }
  regionItem = () =>{
    return this.state.regionList.map((reg, i) =>(
      <Picker.Item label={reg.region} value={reg.region} key={i}/>
    ))
  }

  cityItem = () =>{
    return this.state.cityList.map((city, i) =>(
      <Picker.Item label={city.city} value={city.city} key={i}/>
    ))
  }
  componentDidMount(){
    this.fetchRegion()
  }
  render() {
    const { photo } = this.state;
    console.log('provinsi',this.state.region)
    console.log('city list', this.state.cityList)
    return (
      <KeyboardAwareScrollView>
      <Container style={{ flex: 1, backgroundColor: "#FFF" }}>
        <Form>
          <Item>
            <Input placeholder="Judul Acara" onChangeText={(text) => this.setState({ title: text })} />
          </Item>
          <Item picker style={{padding: 5}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: "70%" }}
                placeholder="Provinsi"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.region}
                onValueChange={this.onValueChangeRegion.bind(this)}
              >
                <Picker.Item label="Pilih Provinsi" value= "" />
                {this.regionItem()}
              </Picker>
            </Item>
            <Item picker style={{ padding: 5}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: "70%", margin: 3 }}
                placeholder="Kota"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.city}
                onValueChange={this.onValueChangeCity.bind(this)}
              >
                <Picker.Item label="Pilih Kota" value="" />
                {this.cityItem()}
              </Picker>
            </Item>
          <Item>
            <Input placeholder="Lokasi Acara" onChangeText={(text) => this.setState({ address: text })} />
          </Item>
          <Item style={styles.textItem}>
            <Textarea
              style={{ width: "90%", margin: 3 }}
              rowSpan={5}
              bordered
              placeholder="Deskripsi Acara"
              onChangeText={(text) => this.setState({ content: text })}
            />
          </Item>
        </Form>
        <Item>
          <Button bordered transparent info style={{ marginLeft: 14 }}>
            <Icon name="calendar" />
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date()}
              maximumDate={new Date(2020, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Pilih Tanggal"
              placeHolderTextStyle={{ color: "#21ADEE" }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Button>
          <Text style={{ color: "#000", margin: 6 }}>
            {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
        </Item>
        <Item>
          <Button
            bordered
            transparent
            info
            style={{ marginLeft: 14 }}
            onPress={this.handleChoosePhoto}
          >
            <Icon name="images" />
            <Text style={{ marginLeft: 14, marginRight: 36, color: "#21ADEE" }}>
              Pilih Foto
            </Text>
            {/* {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 300, height: 300 }}
              />
            )} */}
          </Button>
          <Text style={{ marginLeft: 12 }}>
            {this.state.filePath.fileName}
          </Text>
        </Item>
        <Button rounded info style={styles.submitButton} onPress={this.onPressSubmit}>
          <Text style={{ color: '#ffff'}}>Submit</Text>
        </Button>
      </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    width: "30%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20
  },
  textItem: {
    margin: 8,
    width: "100%",
    backgroundColor: "#FFF"
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  event: state.event,
})


export default connect(mapStateToProps)(AddNewEvent)