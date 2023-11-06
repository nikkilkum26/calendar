import React from 'react';
import { format } from 'date-fns';
import CalendarEvent from './CalendarEvent';




const CalendarEventsMore = ({ date, events }) => {
  return (
    <div className="calendar-play-events-more">
      <span>{events.length} more</span>
      <div className="calendar-play-events-more-popup">
        <div>
          <span>{format(date, 'ccc')}</span>
          <span>{format(date, 'dd')}</span>
        </div>
        <div>
          {events.map((event) => (
            <CalendarEvent event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarEventsMore;
