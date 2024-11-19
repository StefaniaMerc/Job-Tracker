import Header from "../components/Header"
import EvCalendar from "../components/EvCalendar"

export default function Calendar(props){
    return(
        <div>
            <Header name = {props.name}/>
            <EvCalendar />
        </div>
    )
}