import { put, call } from 'redux-saga/effects'
import {
    SHOW_USER_DATA,
    FAILED_GET_USER_DATA,
    SUCCESS_USER_DATA
} from '../redux/type/UserType'
import { apiGetUser } from './api/apiUser'

export function* getUserData(action) {
    try {
        const { payload } = action
        const users = yield call(apiGetUser, payload)
        console.log('Payload users di saga', action)
        yield put({ type : SHOW_USER_DATA, payload : users })
        yield put({ type: SUCCESS_USER_DATA, payload : 'Successfully get' })
    } catch (error) {
        yield put({ type : FAILED_GET_USER_DATA, payload: 'Fatal ERROR, Bro!' })
        console.log(error)
    }
}