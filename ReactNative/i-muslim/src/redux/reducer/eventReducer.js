import { 
    REQUEST_EVENT_DATA, 
    SHOW_EVENT_DATA, 
    FAILED_GET_EVENT_DATA, 
    SUCCESS_EVENT_DATA } from '../type/eventTypes'

const initialState = {
    loading : true,
    data : [],
    message : null,
    page: 1,
    pages: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EVENT_DATA :
            return {
                ...state,
                loading : true
            }
        case SHOW_EVENT_DATA :
            return {
                ...state,
                loading : false,
                data : action.payload.docs,
                pages : action.payload.pages,
                page: action.payload.page
            }
        case FAILED_GET_EVENT_DATA :
            return {
                ...state,
                loading : false,
                message : action.payload
            }
        case SUCCESS_EVENT_DATA :
            return {
                ...state,
                loading : false,
                message : action.payload
            }
        default :
            return state
    }
}