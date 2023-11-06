import React, { useState, useContext, useEffect } from 'react';
import CalendarEvent from './CalendarEvent';
import CalendarEventsMore from './CalendarEventsMore';
import { Context } from './Context';



const MAX_VISIBLE_ITEMS = 3;

const CalendarEvents = ({ date }) => {
  const [events, setEvents] = useState([]);
  const context = useContext(Context);
  const { getEvents } = context;

  useEffect(() => {
    setEvents(getEvents(date));
  }, [date, getEvents]);

  return (
    <div className="calendar-play-events" onClick={(ev) => ev.stopPropagation()}>
      {events
        .filter((e, index) => index < MAX_VISIBLE_ITEMS)
        .map((event) => (
          <CalendarEvent event={event} key={event.id} />
        ))}
      {events.length > MAX_VISIBLE_ITEMS && (
        <CalendarEventsMore
          date={date}
          events={events.filter((e, index) => index >= MAX_VISIBLE_ITEMS)}
        />
      )}
    </div>
  );
};

export default CalendarEvents;
