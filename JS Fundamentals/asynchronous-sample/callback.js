function readBooks(time, books, callback) {
    console.log(`saya membaca ${books.name}`)
    setTimeout(() => {
        let sisaWaktu = 0
        if(time > books.timeSpent) {
            sisaWaktu = time - books.timeSpent
            console.log(`saya sudah membaca ${books.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, books.timeSpent)
}
 
module.exports = readBooks 