import Header from "../components/Header"
import ApplicationCard from "../components/ApplicationCard"

export default function Archive(props){
    return(
        <div>
            <Header name = {props.name}/>
            <ApplicationCard />
        </div>
    )
}