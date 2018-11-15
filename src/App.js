import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import DashboardPage from './pages/Dashboard';
import BookingPage from './pages/Booking';

class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="App">
        {user.isAdmin ? <DashboardPage /> : <BookingPage />}
      </div>
    );
  }
}

const Connected = connect(({ user }) => ({ user }));
export default Connected(App);
