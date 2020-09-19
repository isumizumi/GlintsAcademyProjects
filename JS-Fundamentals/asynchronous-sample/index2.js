var readBooksPromise = require('./promise.js');

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
var booksQueue = books.length;
var timeAvailable = 10000;

// Cara pertama
function execute(timeAvailable, ind, booksQueue) {
    readBooksPromise(timeAvailable, books[ind])
        .then(function (remainingTime) {
            timeAvailable = remainingTime;
            booksQueue = booksQueue - 1;
            if (booksQueue > 0) {
                execute(timeAvailable, ind+1, booksQueue);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

execute(timeAvailable, 0, booksQueue);



// Cara kedua
// readBooksPromise(timeAvailable, books[0])
// .then(function(time) {
//     console.log('Sisa waktu', time);
//     readBooksPromise(time, books[1])
//         .then(function(time) {
//             console.log('Sisa waktu', time);
//             readBooksPromise(time, books[2])
//             .then(function(time) {
//                 console.log('Sisa waktu', time);
//             })
//             .catch(function(error) {
//                 console.log(error);
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// })
// .catch(function(error) {
//     console.log(error);
// })