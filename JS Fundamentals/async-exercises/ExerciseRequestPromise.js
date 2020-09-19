const request = require('request-promise');

const options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        'User-Agent': 'request'
    }
};

request.get(options).then(function(body) {
    const info = JSON.parse(body);
    console.log(info[0].name)
    console.log(info[0].username + " Stars");
}).catch((err) => {
    console.log(err)
})