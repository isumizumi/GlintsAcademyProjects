import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      totalPrice: 0,
    }
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  updatePrice(price) {
    //? #Soal Bonus (10 poin) 
    //? Buatlah teks 'Total Harga' yang akan bertambah setiap kali salah satu barang/item di klik/tekan.
    //? Di sini, buat fungsi untuk menambahkan nilai dari state.totalPrice dan ditampilkan pada 'Total Harga'.

    // Kode di sini
    
  }

  render() {
    const { userName } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={{ minHeight: 50, width: DEVICE.width * 0.88 + 20, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Hai,{'\n'}
              {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              <Text style={styles.headerText}></Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>Total Harga{'\n'}
              <Text style={styles.headerText}></Text>
            </Text>
          </View>
          <View>

          </View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder='Cari barang..'
          />
        </View>

        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}

        <FlatList
          
        />
      </View>
    )
  }
};

class ListItem extends React.Component {

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data
    return (
      <View>
        <Image/>
        <Text></Text>
        <Text></Text>
        <Text>Sisa stok:</Text>
        <TouchableOpacity>
          <Text>BELI</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  //? Styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    justifyContent: 'center',
  },
  itemImage: {
    height: 80,
    width: 160
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  itemPrice: {
    color: "blue",
    fontSize: 16,
    textAlign: 'center'
  },
  itemStock: {
    textAlign: 'center'
  },
  itemButton: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    marginHorizontal : 20
  },
  buttonText: {
    color:'white'
  }
})
