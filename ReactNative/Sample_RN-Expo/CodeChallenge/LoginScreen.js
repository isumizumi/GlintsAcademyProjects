import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      isError: false,
    }
  }

  loginHandler() {
    //? #Soal No. 1 (10 poin)
    //? Buatlah sebuah fungsi untuk berpindah halaman hanya jika password yang di input bernilai '12345678' 
    //? dan selain itu, maka akan mengubah state isError menjadi true dan tidak dapat berpindah halaman.

    //? #SoalTambahan (+ 5 poin): kirimkan params dengan key => userName dan value => this.state.userName ke halaman Home, 
    //? dan tampilkan userName tersebut di halaman Home setelah teks "Hai,"

    // Kode di sini


  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Code Challenge</Text>
          <Text style={styles.subTitleText}>Glints x Binar</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name='account-circle' color='blue' size={40} />
            <View>
              <Text style={styles.labelText}>Username/Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Masukkan Nama User/Email'
                // Kode di sini
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name='lock' color='blue' size={40} />
            <View>
              <Text style={styles.labelText}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Masukkan Password'
                // Kode di sini
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text style={this.state.isError ? styles.errorText : styles.hiddenErrorText}>Password Salah</Text>
          {/* Kode di sini */}
          <Button title='Login'/>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    alignSelf: 'flex-end',
    marginBottom: 16
  },
  formContainer: {
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16
  },
  labelText: {
    fontWeight: 'bold'
  },
  textInput: {
    width: 300,
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
