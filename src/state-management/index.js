import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const composeWithDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
    rootReducer,
    composeWithDevtools(
        applyMiddleware(thunk),
    ),
);
export default store;
