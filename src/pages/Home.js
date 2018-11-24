import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_USER } from '../state-management/action-types';

const loginAsCustomer = () => ({
    type: SET_USER,
    payload: { isAdmin: false },
})
const loginAsHost = () => ({
    type: SET_USER,
    payload: { isAdmin: true },
})

class HomePage extends Component {

    render() {
      return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
                onClick={() => {
                    this.props.onLoginAsCustomer()
                }}
                className="button button--pipaluk button--text-thick"
            > CUSTOMER     </button>
            <button
                onClick={() => {
                    this.props.onLoginAsHost()
                }}
                className="button button--pipaluk button--text-thick"
            > SERVICE HOST </button>
        </div>
      );
    }
  }

const Connected = connect(
    ({ events }) => ({ events: Object.keys(events).map(id => events[id]) }),
    dispatch => ({
        onLoginAsCustomer: () => dispatch(loginAsCustomer()),
        onLoginAsHost: () => dispatch(loginAsHost())
    })
);
export default Connected(HomePage);
