import { format } from 'date-fns';
import React, { useCallback, useState } from 'react';
import { orderBy } from 'lodash';


export const Context = React.createContext({
  modalTitle: '',
  modalContent: undefined,
  getEvents: () => {},
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {},
  showModal: () => {},
  hideModal: () => {}
});

export const ContextProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: crypto.randomUUID(),
      date: '2023-10-02',
      title: 'This is sample test',
      startTime: '09:30',
      endTime: '10:00',
      status:"assigned"
    }
  ]);
  // const [events, setEvents] = useState<EventType[]>(getDummyEvents());
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(undefined);

  const getEvents = useCallback(
    (date) => {
      return orderBy(
        events.filter((e) => e.date === format(date, 'yyyy-MM-dd')),
        ['startTime']
      );
    },
    [events]
  );

  const addEvent = (event) => {
    event.id = new Date().getTime().toString();
    setEvents((oldValue) => [...oldValue, event]);
  };

  const updateEvent = (event) => {
    setEvents((oldValue) => {
      const newEvents = [...oldValue];
      const index = newEvents.findIndex((e) => e.id === event.id);

      if (index === -1) return newEvents;

      newEvents[index] = event;

      return newEvents;
    });
  };

  const deleteEvent = (event) => {
    setEvents((oldValue) => {
      const newEvents = [...oldValue];
      const index = newEvents.findIndex((e) => e.id === event.id);

      if (index === -1) return newEvents;

      newEvents.splice(index, 1);

      return newEvents;
    });
  };

  const showModal = (content, title) => {
    setModalTitle(title || '');
    setModalContent(content);
  };

  const hideModal = () => {
    setModalTitle('');
    setModalContent(undefined);
  };

  return (
    <Context.Provider
      value={{
        modalTitle,
        modalContent,
        getEvents,
        addEvent,
        updateEvent,
        deleteEvent,
        showModal,
        hideModal
      }}
    >
      {children}
    </Context.Provider>
  );
};
