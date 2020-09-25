import React, { Component } from 'react';
import {
    StyleSheet, View, TextInput
} from 'react-native';

export default class FormInput extends Component {
    render() {
        const { ...others } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='#015249'
                    placeholderTextColor="#ffffff"
                    selectionColor="#ffffff"
                    {...others}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },
    inputBox: {
        width: 300,
        paddingLeft: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        marginTop: 5,
        color: '#ffffff',
        fontWeight: 'bold'
    }
});