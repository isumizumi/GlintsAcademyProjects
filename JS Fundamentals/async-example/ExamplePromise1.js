let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(11)
        }, 0)
    })
    .then(function(num) {
        console.log('first', num)
        return num * 2
    })
    .then(function(num) {
        console.log('second', num)
        return num * 2
    })
    .then(function(num) {
        console.log('third', num)
        return num * 2
    })