const UserProfile = function(id) {
    return (new Promise(function(resolve, reject) {
        if (!id) {
            reject(new Error('Invalid userId'))
        }
        let response = {
            success: true,
            id: id,
            message: 'User Found'
        }
        resolve(response)
    }))
}

// menggunakan async await harus pada function yang sudah promise
// tidak bisa di root level line
async function main() {
    try {
        const result = await UserProfile(1)
        console.log(result)
    } catch (e) {
        console.log('User not found')
    }
}

main()