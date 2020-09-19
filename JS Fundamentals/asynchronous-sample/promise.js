function readBooksPromise(time, book) {
  console.log(`saya mulai membaca ${book.name}`);
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          let sisaWaktu = time - book.timeSpent;
          if (sisaWaktu >= 0) {
              resolve(sisaWaktu);
          } else {
              console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`);
              reject(sisaWaktu, 'ini sisa waktu saya');
          }
      }, book.timeSpent);
  });
}

module.exports = readBooksPromise
