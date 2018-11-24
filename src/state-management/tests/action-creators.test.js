/**
 * Testing whether functions create desired actions
 *
 * Action creator: a function that
 * - takes any number of arguments
 * - returns an object with "type" property in it
 * 
 * => Assertion: check for presence of type property in the returned object
 * 
 * Exceptions 1: redux-thunk
 * Action creator: a function that
 * - takes any number of arguments
 * - returns a function that get "dispatch" and "getState" as arguments and uses these to trigger other actions
 * 
 * => Assertion: make sure returned value is function.
 * => Assertion: make sure arguments of the returned function (i.e. dispatch, getState) are used as functions.
 * => Assertion: make sure dispatch is called @TODO.
 * 
 */

import { addEvents as createAddEvents, fetchEvents as createFetchEvents } from '../action-creators';

jest.mock('../../services/customer-times-fetcher', () => {
    return {
        listen(cb) { cb([{ id: '<id>', title: '' }]) }
    };
});

describe('Action creators', () => {
    it('creates action to add events to the store', () => {
        // Arrange
        const event = { id: '1', title: '', start: new Date(), end: new Date() };
        const events = [event];
        const payload = { '1' : event };
        const expectedAction = { type: 'on-demand-shop/ADD_EVENTS', payload };

        // Act
        const action = createAddEvents(events);

        // Assert
        expect(action).toEqual(expectedAction);
    });

    it('creates action to fetch events from the backend', () => {
        // Arrange
        // N/A

        // Act
        const action = createFetchEvents();

        // Assert
        expect(action).toBeInstanceOf(Function);

    });

    // @NOTE this should not be here
    xit('calls dispatch once after fetching events from backend', () => {
        // Arrange
        const dispatch = jest.fn();
        
        // Act
        const action = createFetchEvents();
        expect(dispatch).toHaveBeenCalledTimes(0);
        // @NOTE: "action" function is a consumer, so we cannot make any direct assertions on it
        action(dispatch)

        // Assert
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});
