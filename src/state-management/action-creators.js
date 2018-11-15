import { ADD_EVENTS } from "./action-types";

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
        // @TODO call backend api
        const eventSource = new EventSource('http://localhost:8000/events');
        eventSource.addEventListener('error', event => {
            console.log('[event source error]', event);
        });
        eventSource.addEventListener('message', event => {
            const data = JSON.parse(event.data);
            console.log('[system updates]', data);
            if (data.id) {
                dispatch(addEvents([data]));
            }
        });
        eventSource.addEventListener('open', event => {
            console.log('[event source starts]', event);
        });
        dispatch(addEvents(eventsStatic));
    }
}
