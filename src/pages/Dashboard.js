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
      <div className="dashboard-page" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
