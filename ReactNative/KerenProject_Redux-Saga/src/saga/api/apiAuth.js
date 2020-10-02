// import axios from 'axios'

// export const login = (email, password) => {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     const data = JSON.stringify({
//         email: email,
//         password: password
//     })
//     // return axios.post('http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/auth/', data, { headers: headers} )
//     return axios.post('https://be-kickin.herokuapp.com/api/v1/user/login', data, { headers: headers} )
//     .then(res => res.data.data.token)
// }