

export default function TextInputCard(props){

    return(
        <div>
            <label htmlFor={props.htmlFor}>{props.labelTxt}
            <input className="card-input" type={props.type} placeholder={props.placeholder} id={props.id} name={props.name}></input>
            </label>
        </div>
    )
}