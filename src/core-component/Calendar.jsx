import * as React from 'react';
import CalendarGrid from './CalendarGrid';
import { ContextProvider } from './Context';
import './Calendar.scss';
import ModalContainer from './ModalContainer';

const Calendar=(props)=> {



  return (
    <>

        
          <ContextProvider>
            {/* <ModalContainer /> */}
            <CalendarGrid />
          </ContextProvider>
    

    </>
  );
}

export default Calendar;
