//Callback
const UserProfile = function(id, callback) { // callback atau cb
    let result = {
        success: true,
        id: id,
        message: 'User Found'
    }
    if (!id) {
        return callback(new Error("Error!")) // syntax to create error
    }
    return callback(null, result)
}

UserProfile(undefined, function(err, result) {
    if (err) {
        console.log(err.message)
        // console.log("Check again!")
    } else {
        console.log(result)
    }
    // guard clause
})