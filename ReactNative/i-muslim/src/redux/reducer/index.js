import { combineReducers } from 'redux'
import user from './user'
import auth from './auth'
import event from './eventReducer'
import eventItem from './eventItemReducer'

const IndexReducer = combineReducers ({
    user : user,
    auth : auth,
    event :event,
    eventItem: eventItem

})

export default IndexReducer