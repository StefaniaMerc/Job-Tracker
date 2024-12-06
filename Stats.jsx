import Header from "../components/Header"
import DatePicker from "../components/DatePicker"
import Dashboard from "../components/Dashboard"


export default function Stats(props){
      
    return(
        <div>
            <Header name = {props.name}/>
            <DatePicker />
            <Dashboard />
            
        </div>
    )
}