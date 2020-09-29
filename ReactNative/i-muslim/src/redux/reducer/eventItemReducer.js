import { 
    REQUEST_EVENT_ITEM, 
    SHOW_EVENT_ITEM, 
    FAILED_GET_EVENT_ITEM, 
    SUCCESS_EVENT_ITEM } from '../type/eventItem'

const initialState = {
    loading : true,
    data : {},
    message : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EVENT_ITEM :
            return {
                ...state,
                loading : true
            }
        case SHOW_EVENT_ITEM :
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        case FAILED_GET_EVENT_ITEM :
            return {
                ...state,
                loading : false,
                message : action.payload
            }
        case SUCCESS_EVENT_ITEM :
            return {
                ...state,
                loading : false,
                message : action.payload
            }
        default :
            return state
    }
}