import { combineReducers } from 'redux'
import { attendeesReducer } from './attendees/reducers'

const rootReducer = combineReducers({
    attendees:attendeesReducer
})

export default rootReducer;