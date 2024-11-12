import Header from "../components/Header"
import Form from "../components/Form"
import FormComp from "../components/FormComp"

export default function AddApllication(props){
    return(
        <div className="AddApp">
            <Header name = {props.name}/>
            {/* <Form /> */}
            <FormComp />
        </div>
    )
}