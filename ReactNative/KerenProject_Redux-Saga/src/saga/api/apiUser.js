import axios from 'axios'

export const apiGetUser = (token) => {
    console.log('Tokennya di apiUser saga: ', token)
    let headers = {
        'Authorization': token
    }
    // return axios.get('http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/users/', { headers: headers })
    return axios.get('https://be-kickin.herokuapp.com/api/v1/profile/show', { headers: headers })
    .then(function(res){
        // return res.data.results
        return res.data.data.profile
    })
}