var readBooks = require("./callback")
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
let timeAvailable = 10000
let i = 0

// Cara pertama
readBooks(timeAvailable, books[0], function(time) {
    readBooks(time, books[1], function(time) {
        readBooks(time, books[2], function(time){
            readBooks(time, books[0], function(time){
                return time;
            })
        })
    })
});



// Cara kedua
// readBooks(timeAvailable, books[i], params = (cb) => {
//     i++
//     if (i<books.length) {
//         readBooks(cb, books[i], params)
//     }
// })



// Cara ketiga
// booksQueue = books.length;
// function execute(timeAvailable, ind, booksQueue) {
//     readBooks(timeAvailable, books[ind], function(remainingTime) {
//         timeAvailable = remainingTime;
//         booksQueue = booksQueue - 1; 
//         if (booksQueue > 0) {
//             execute(timeAvailable, ind+1, booksQueue);
//         }
//     });
// }

// execute(timeAvailable, 0, booksQueue);