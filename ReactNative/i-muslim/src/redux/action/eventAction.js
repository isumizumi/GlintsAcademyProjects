import { REQUEST_EVENT_DATA } from '../type/eventTypes'
import { REQUEST_EVENT_ITEM } from '../type/eventItem'

export const getEvent = (data) => {
    return {
        type : REQUEST_EVENT_DATA,
        token : data
    }
}

export const getItem = (itemId, data) => {
    return {
        type : REQUEST_EVENT_ITEM,
        id : itemId,
        token : data
    }
}