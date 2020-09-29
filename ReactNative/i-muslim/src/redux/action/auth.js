import { REQUEST_LOGIN } from '../type/auth'

export const getLogin = (data) => {
    return {
        type : REQUEST_LOGIN,
        payload: data
    }
}