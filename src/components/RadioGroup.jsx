import { useState } from "react"

export default function RadioGroup(props){

    return(
        <ul className="radio-inputs">
                    <li><input className="radio-input" name={props.name} type="radio" value={props.value} id={props.name + props.value}></input>
                    <label className="label-input" htmlFor={props.name + props.value}>{props.label}</label></li>
                    <div><hr className="solid"/></div>
                   </ul>
    )

}