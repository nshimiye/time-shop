import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../state-management/action-creators';
import MyCalendar from '../shared-components/BigCalendar';


class BookingPage extends Component {
  state = {
    events: [
      /*
      {
        title: string, StaticRange: Date, end: Date
      }
      */
    ]
  }
  componentDidMount() {
    this.props.onFetchEvents();
  }

  createEvent = (range) => {
    const start = range.start;
    const end = new Date(range.end);
    end.setHours(23)
    end.setMinutes(59)
    end.setSeconds(59)

    const event = { start, end, title: 'Selected' };
    const events = [...this.state.events, event];
    this.setState({ events });
  }

  render() {
    const { events } = this.state;
    return (
      <div className="booking-page" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MyCalendar events={events} onSelectRange={range => {
          console.log('[MyCalendar]', range);
          this.createEvent(range);
        }} />
      </div>
    );
  }
}

const Connected = connect(
  ({ events }) => ({ events: Object.keys(events).map(id => events[id]) }),
  dispatch => ({
    onFetchEvents: () => '' // dispatch(fetchEvents())
  })
);
export default Connected(BookingPage);
