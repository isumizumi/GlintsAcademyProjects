import { all, takeLatest } from 'redux-saga/effects'
import { REQUEST_USER_DATA } from '../type/user'
import { getUserData } from './user'
import { requestLogin } from './auth'
import { REQUEST_LOGIN} from '../type/auth'
import { REQUEST_EVENT_DATA } from '../type/eventTypes'
import { getEventData, getEventItem } from './eventSaga'
import { REQUEST_EVENT_ITEM } from '../type/eventItem'
export default function* IndexSaga() {
    yield all([
        takeLatest(REQUEST_USER_DATA, getUserData ),
        takeLatest(REQUEST_EVENT_DATA, getEventData ),
        takeLatest(REQUEST_EVENT_ITEM, getEventItem)
    ])
}