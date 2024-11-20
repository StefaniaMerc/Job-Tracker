import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export default function EvCalendar() {
    const [value, onChange] = useState(new Date());
    
    function tileContent({ date }) {
        const today = new Date();
        // Add class to tiles in month view only
        if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) {
          // Check if a date React-Calendar wants to check is on the list of dates to add class to
            return <h6>Interview</h6>;
        }
      }

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                tileContent = {tileContent}
            />
        </div>
    );
}