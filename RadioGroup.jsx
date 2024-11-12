
export default function RadioGroup(props){
    
    return(
        <li><input className="radio-input" name={props.name} type={props.type} value= {props.value} id={props.id}></input>
            <label className="label-input"  htmlFor={props.htmlFor}><span>{props.labelTxt}</span></label></li>
    )

}