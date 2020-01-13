import { requestAttendees, receivedAttendees, failureAttendees } from './actions'
import Guests from '../../api/example_data.json'

export const fetchAttendees = () =>  dispatch => {
    try{
       dispatch(requestAttendees())
       const data = Guests.guestList;
       setTimeout(() => {
           dispatch(receivedAttendees(data))
       },500)
    } catch(err){
      dispatch(failureAttendees())
    }
} 