import { 
    REQUEST_LOGIN, 
    SHOW_LOGIN, 
    FAILED_LOGIN, SUCCESS_LOGIN } from '../type/auth'

const initialState = {
    loading : true,
    token: null,
    message : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LOGIN :
            return {
                ...state,
                token : action.payload
            }
        case SHOW_LOGIN :
            return {
                ...state,
                loading : false,
                token : action.payload
            }
        case FAILED_LOGIN :
            return {
                ...state,
                loading : false,
                message : 'Failed authorization'
            }
        case SUCCESS_LOGIN :
            return {
                ...state,
                loading : false,
                message : 'Login success'
            }
        default :
            return state
    }
}