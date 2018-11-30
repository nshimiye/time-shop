import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        // border: 'solid 1px ' + (date.getDate() === 7 ? '#265985' : '#265984'),
        backgroundColor: (date.getDate() === 7 ? '#265985' : '#265984'),
        color: '#fff',
      },
    }
  else return {}
}
/**
 * @param {Array<{ title: string, StaticRange: Date, end: Date }>} events 
 */
const MyCalendar = ({ onSelectRange, events = [], defaultView = BigCalendar.Views.MONTH }) => (
  <div style={{ width: 700, height: 500 }}>
    <BigCalendar
      selectable
      localizer={localizer}
      events={events}
      defaultDate={new Date()}
      defaultView={defaultView}
      onSelectSlot={onSelectRange}
      dayPropGetter={customDayPropGetter}
    />
  </div>
)

export const BigCalendarViews = BigCalendar.Views;
export default MyCalendar;
