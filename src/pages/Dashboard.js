import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../state-management/action-creators';
import MyCalendar, { BigCalendarViews } from '../shared-components/BigCalendar';

class DashboardPage extends Component {
  componentDidMount() {
    this.props.onFetchEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div className="booking-page">
        <MyCalendar events={events} defaultView={BigCalendarViews.AGENDA} />
      </div>
    );
  }
}

const Connected = connect(
  ({ events }) => ({ events: Object.keys(events).map(id => events[id]) }),
  dispatch => ({
    onFetchEvents: () => dispatch(fetchEvents())
  })
);
export default Connected(DashboardPage);
