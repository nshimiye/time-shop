import React, { Component } from 'react';

import MyCalendar, { BigCalendarViews } from '../shared-components/BigCalendar';


const myEventsList = [
  {
    id: 0,
    title: 'Offer 1',
    start: new Date(2018, 10, 17, 0, 0, 1),
    end: new Date(2018, 10, 17, 0, 10,1),
  },
  {
    id: 2,
    title: 'Offer 2',
    start: new Date(2018, 10, 18, 0, 0, 1),
    end: new Date(2018, 10, 18, 0, 10, 1),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
];



class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <MyCalendar events={myEventsList} defaultView={BigCalendarViews.AGENDA} />
      </div>
    );
  }
}

export default DashboardPage;
