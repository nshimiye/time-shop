import { ADD_EVENTS, DEFAULT_ACTION, SET_USER } from "./action-types";

export const initialState = {
    events: {}, // storing array as key-value store
    user: { isAdmin: false } // anyone who is not admin is a customer.
};

/**
 * @param {{ [key: string] : any }} state
 * @param {{ type: string, payload?: any, error?: string }} action
 */
export function reducer(state = initialState, action = { type: DEFAULT_ACTION }) {
    if (action.type === ADD_EVENTS) {
        const events =  { ...state.events, ...action.payload };
        return { ...state, events };
    } else if (action.type === SET_USER) {
        return { ...state, user: action.payload };
    }

    return state;
}

export default reducer;
