import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import DashboardPage from './pages/Dashboard';
import BookingPage from './pages/Booking';
import HomePage from './pages/Home';

class App extends Component {
  render() {
    const { user } = this.props;
    return <BookingPage />;

    // if (!user) {
    //   return <HomePage />
    // }

    // return (
    //   user.isAdmin ? <DashboardPage /> : <BookingPage />
    // );
  }
}

const Connected = connect(({ user }) => ({ user }));
export default Connected(App);
