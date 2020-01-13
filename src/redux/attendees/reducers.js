import {
  REQUEST_ATTENDEES,
  RECEIVED_ATTENDEES,
  FAILURE_ATTENDEES,
  GET_ATTENDEE
} from './constants';

const attendeesState = {
  attendees: [],
  attendeeId:null,
  loading: false,
  error: null,

};

export const attendeesReducer = (state = attendeesState, action) => {
  switch (action.type) {
    case REQUEST_ATTENDEES:
      return { ...state, loading: true };
    case RECEIVED_ATTENDEES:
      return { ...state, loading: false, attendees: action.data };
    case FAILURE_ATTENDEES:
      return { ...state, loading: false, error: action.err };
    case GET_ATTENDEE:
       return {...state, attendeeId:action.id}
    default:
      return state;
  }
};
