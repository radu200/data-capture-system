import {
    REQUEST_ATTENDEES,
    RECEIVED_ATTENDEES,
    FAILURE_ATTENDEES,
    GET_ATTENDEE
} from './constants'


export const requestAttendees = () => {
    return {
        type: REQUEST_ATTENDEES
    }
}

export const receivedAttendees = data => {
    return {
        type:RECEIVED_ATTENDEES,
        data
    }
}

export const failureAttendees = err => {
   return {
        type:FAILURE_ATTENDEES,
        err
   }
}

export const getAttendee = id => {
    return {
        type: GET_ATTENDEE,
        id
    }
}

