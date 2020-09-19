// Promise
const UserProfile = function(id) { // parameter 

    // statement
    return (new Promise(function(resolve, reject) {
        let response = {
            success: true,
            id: id,
            message: 'User Found'
        }
        if (id) {
            resolve(response)
        }
        reject(new Error('Invalid userId'))
    }))
}

UserProfile(10).then((result) => { // then when successed (resolve)
    console.log("Hasilnya", result)
}).catch((err) => { // catch when failed (reject)
    console.log(err.message)
});