import Header from "../components/Header"
import Form from "../components/Form"

export default function AddApllication(props){
    return(
        <div>
            <Header name = {props.name}/>
            <Form />
        </div>
    )
}