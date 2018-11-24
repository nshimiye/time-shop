import { ADD_EVENTS } from "./action-types";
import CTFService from '../services/customer-times-fetcher'

export const eventsStatic = [
    // {
    //     id: 0,
    //     title: 'Customer Name 1',
    //     start: new Date(2018, 10, 17, 0, 0, 1),
    //     end: new Date(2018, 10, 17, 0, 10,1),
    // },
];

// Sync actions
export const addEvents = (events) => ({
    type: ADD_EVENTS,
    payload: events.reduce((acc, event) => ({ ...acc, [event.id]: event }), {}),
});

// Async actions
export const fetchEvents = () => {
    return dispatch => {
        CTFService.listen(events => 
            dispatch(addEvents(events))
        );
    };
}
