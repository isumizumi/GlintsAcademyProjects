const request = require('request');

const options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        'User-Agent': 'request'
    }
};

const requestAPI = () => {
    return new Promise((resolve, reject) => {
        request(options, (error, res, body) => {
            if (!error && res.statusCode == 200) {
                const info = JSON.parse(body);
                //resolve(info)
                console.log(info[0].name)
                console.log(info[0].username + " Stars");
            } else {
                reject(error)
            }
        })
    })
}

requestAPI().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})