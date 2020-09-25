import React, { Component } from 'react'
import {  StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Container, Content, Text, Header, Left, Right, Button, Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import md5 from 'md5';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token')
            // await this.setState({ token:token})
            console.log('This is token sayang', token)
        }
        catch (e) {
            console.log('No token provided')
        }
    }

    static navigationOptions = {
        header: null
    }

    async handleLogout() {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Home')
    }

    render() {
        console.disableYellowBox = true
        return (
            <Container>
                <Header style={{ backgroundColor: '#FDFDFD' }}>
                    <Right>
                        <TouchableOpacity
                            onPress={() => this.handleLogout()}
                            style={{ backgroundColor: '#FDFDFD', marginRight: 20 }}>
                            <Icon name='md-log-out' style={{ color: '#015249' }} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <View style={styles.headerContent}>
                                    <Image style={styles.avatar}
                                        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} />
                                    <Text style={styles.name}>{this.props.navigation.state.params.email} </Text>
                                    <Text style={styles.name}>{md5(this.props.navigation.state.params.password)} </Text>
                                    <Text style={styles.userInfo}>Jakarta </Text>
                                </View>
                            </View>
                            {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                            </View> */}
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { this.props.navigation.navigate('TodoList') }}>
                                    <Text style={styles.buttonText}>Todo List</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#015249'
    },
    // header: {
    //     backgroundColor: "#ffffff"
    // },
    headerContent: {
        padding: 30,
        alignItems: 'center'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#ffffff",
        marginBottom: 10
    },
    name: {
        fontSize: 22,
        color: "#015249",
        fontWeight: '600'
    },
    userInfo: {
        fontSize: 16,
        color: "#015249",
        fontWeight: '600'
    },
    button: {
        width: 300,
        backgroundColor: '#57BC90',
        borderRadius: 25,
        marginVertical: 5,
        marginTop: 30,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    }
});

export default withNavigation(Profile)