import { ADD_EVENTS } from "./action-types";

export const eventsStatic = [{
        id: 0,
        title: 'Customer Name 1',
        start: new Date(2018, 10, 17, 0, 0, 1),
        end: new Date(2018, 10, 17, 0, 10,1),
    },
    {
        id: 2,
        title: 'Customer Name 2',
        start: new Date(2018, 10, 18, 0, 0, 1),
        end: new Date(2018, 10, 18, 0, 10, 1),
    },
    {
        id: 14,
        title: 'Customer Name 3',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
];


// Sync actions
export const addEvents = (events) => ({
    type: ADD_EVENTS,
    payload: events.reduce((acc, event) => ({ ...acc, [event.id]: event }), {}),
});


// Async actions
export const fetchEvents = () => {
    return dispatch => {
        // @TODO call backend api
        dispatch(addEvents(eventsStatic));
    }
}
