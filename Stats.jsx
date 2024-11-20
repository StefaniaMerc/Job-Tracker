import Header from "../components/Header"

import { DateRangePicker } from 'rsuite';
import { addDays } from 'date-fns';
import 'rsuite/DateRangePicker/styles/index.css';

export default function Stats(props){

    const predefinedRanges = [
        {
          label: 'Today',
          value: [new Date(), new Date()],
          placement: 'left'
        },
        {
          label: 'Yesterday',
          value: [addDays(new Date(), -1), addDays(new Date(), -1)],
          placement: 'left'
        },
        {
          label: 'Last 7 Days',
          value: [addDays(new Date(), -7), new Date()],
          placement: 'left'
        },
        {
          label: 'Last 30 Days',
          value: [addDays(new Date(), -30), new Date()],
          placement: 'left'
        }
      ];

      const pickerStyle = { 
        top:"100px", 
        position:"fixed",
        marginTop: "10px",  
        marginBottom: "25px",
        marginLeft: "10px"
    }; 
      
    return(
        <div>
            <Header name = {props.name}/>
            <DateRangePicker 
                placeholder="Select Date Range"
                block
                showOneCalendar 
                ranges={predefinedRanges}
                style={pickerStyle}
            />
        </div>
    )
}