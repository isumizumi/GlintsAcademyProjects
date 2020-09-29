import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux';
import { getItem } from '../redux/action/eventAction'

class EventItem extends Component {
    static navigationOptions = {
        headerTitle: 'Event Detail',
        headerStyle: { marginTop: 24 }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 0);
        // console.log('ini itemId loh', itemId)
        this.props.getEventListItem(itemId, this.props.auth.token)
    }

    onPressSubmit = async () => {
        console.log(this.props.auth.token)
        try {
            const response = await axios.post(
              "",
              {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": this.props.auth.token
                }
              }
            );
            console.log(response)
            this.props.navigation.navigate('Profiles')
          } catch (error) {
            console.error(error);
          }
    }

    render() {
        // console.log('ini image event', this.props.eventItem.data.fileLink)
        return (
            <View style={{ flex: 1, alignContent: 'center'}}>
                <Image source={{uri: this.props.eventItem.data.fileLink}} style={styles.imageItem} />
                <View style={styles.container}>
                    <View style={styles.buttonView}>
                        <Text>
                            {new Date(this.props.eventItem.data.date).toDateString()}
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            title='Join event'
                            style={styles.buttonEvent}
                            // onPress={this.onPressSubmit}
                        />
                    </View>
                </View>
                <Text style={styles.textItem}>{this.props.eventItem.data.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageItem: {
        width: 300, 
        height: 200, 
        justifyContent: 'center', 
        alignSelf: 'center',
        margin: 20
    },
    container:{
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        margin: 10
    },
    buttonView:{
        flex: 1, 
        alignSelf: 'stretch', 
        marginHorizontal: 4,
        marginRight: 50
    },
    buttonEvent: { 
        borderColor: 'gray', 
        borderWidth: 2, 
        borderRadius: 35
    },
    textItem:{
        flex: 5,
        margin: 10,
        justifyContent: 'center', 
        alignSelf: 'center'
    }
})

const mapStateToProps = state => ({
    auth : state.auth,
    event :state.event,
    eventItem: state.eventItem
})

const mapDispatchToProps = dispatch => {
    return {
        getEventListItem : (itemId, token) => dispatch(getItem(itemId, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventItem)