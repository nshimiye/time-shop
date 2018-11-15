import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment) 

const MyCalendar = ({ events = [] }) => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 700, height: 500 }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        // views={allViews}
        // showMultiDayTimes
        // step={60}
        // max={new Date(2015, 17, 2)}
        defaultDate={new Date()}
      />
    </div>
  </div>
)

export default MyCalendar;
