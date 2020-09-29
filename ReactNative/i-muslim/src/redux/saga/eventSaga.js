import { put, call } from 'redux-saga/effects'
import { SHOW_EVENT_DATA, 
    FAILED_GET_EVENT_DATA, 
    SUCCESS_EVENT_DATA} from '../type/eventTypes'
import { SHOW_EVENT_ITEM, 
    FAILED_GET_EVENT_ITEM, 
    SUCCESS_EVENT_ITEM} from '../type/eventItem'
import { apiGetEvent } from './api/apievent'
import { apiEventItem } from './api/apieventItem'

export function* getEventData(action) {
    try {
        const { token } = action;
        const events = yield call(apiGetEvent, token)
        console.log(events)
        yield put({ type : SHOW_EVENT_DATA, payload : events })
        yield put({ type : SUCCESS_EVENT_DATA, payload : 'Successfully get ' })
    } catch (error) {
        yield put({ type : FAILED_GET_EVENT_DATA, payload : 'Fatal ERROR' })
        console.log(error)
    }
}

export function* getEventItem(action) {
    try {
        const { id, token } = action;
        const events = yield call(apiEventItem, id, token)
        console.log(action)
        yield put({ type : SHOW_EVENT_ITEM, payload : events })
        yield put({ type : SUCCESS_EVENT_ITEM, payload : 'Successfully get ' })
    } catch (error) {
        yield put({ type : FAILED_GET_EVENT_ITEM, payload : 'Fatal ERROR' })
        console.log(error)
    }
}