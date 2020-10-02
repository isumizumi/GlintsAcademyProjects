import { REQUEST_USER_DATA } from '../type/UserType'

export const getUser = data => {
    console.log('Data user di UserAction, ', data)
    return {
        type : REQUEST_USER_DATA,
        payload : data
    }
}