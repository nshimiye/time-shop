import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment) 

const MyCalendar = ({ events = [], defaultView = BigCalendar.Views.MONTH }) => (
  <div style={{ width: 700, height: 500 }}>
    <BigCalendar
      localizer={localizer}
      events={events}
      defaultDate={new Date()}
      defaultView={defaultView}
    />
  </div>
)

export const BigCalendarViews = BigCalendar.Views;
export default MyCalendar;
