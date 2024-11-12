import TextInputCard from "./TextInputCard";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import RadioGroup from "./RadioGroup";

export default function FormComp(){

    const textInput = TextInput.map(item => {
        return (
            <TextInputCard 
                id={item.id}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                htmlFor={item.htmlFor}
                labelTxt={item.labelTxt}
            />
        )
    })

    const radioInput = RadioInput.map(item => {
        return (
            <RadioGroup 
                id={item.id}
                name={item.name}
                type={item.type}
                value= {item.value}
                htmlFor={item.htmlFor}
                labelTxt={item.labelTxt}
            />
        )
    })


    return(
        <form className="application-form">
            <div className="card">
                <h4 className="card-title">Informations</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    {textInput[0]}
                    <div><hr className="solid"/></div>
                    {textInput[1]}
                    <div><hr className="solid"/></div>
                    {textInput[2]}
                    <div><hr className="solid"/></div>
                    {textInput[3]}
                    <div><hr className="solid"/></div>
                    {textInput[4]}
                </div>
            </div>
            <div className="card">
                <h4 className="card-title">Experience</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    <ul className="radio-inputs">
                    {radioInput[0]}
                    <div><hr className="solid"/></div>
                    {radioInput[1]}
                    <div><hr className="solid"/></div>
                    {radioInput[2]}
                    <div><hr className="solid"/></div>
                    {radioInput[3]}
                    <div><hr className="solid"/></div>
                    {radioInput[4]}
                    </ul>
                </div>
            </div>
            <div className="card">
            <h4 className="card-title">Status</h4>
            <div><hr className="menu-solid"/></div>
            <div className="sub-card">
            <ul className="radio-inputs">
                    {radioInput[5]}
                    <div><hr className="solid"/></div>
                    {radioInput[6]}
                    <div><hr className="solid"/></div>
                    {radioInput[7]}
                    <div><hr className="solid"/></div>
                    {radioInput[8]}
                    <div><hr className="solid"/></div>
                    {radioInput[9]}
                </ul>
                </div>
            </div>
            <div className="card">
            <h4 className="card-title">Interview</h4>
            <div><hr className="menu-solid"/></div>
            <div className="sub-card">
                {textInput[5]}
                <div><hr className="solid"/></div>
                {textInput[6]}
                <div><hr className="solid"/></div>
                {textInput[7]}
                </div>                
            </div>
            <div className="card">
            <h4 className="card-title">Interview results</h4>
            <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                <ul className="radio-inputs">
                    {radioInput[10]}
                    <div><hr className="solid"/></div>
                    {radioInput[11]}
                    <div><hr className="solid"/></div>
                    </ul>
                </div> 
            </div>
            <div className="card">
            <h4 className="card-title">Comments/Cover Letter</h4>
            <div><hr className="menu-solid"/></div>
            <div className="sub-card">
            <input className="card-input" type="textarea" placeholder="Comments/Cover Letter"></input>
            </div>
            </div>
            <div className="alarmCal-card">
            <div className="alarmCasub-card">
                <label className="label-input">Add to calendar</label>
                <label className="switch">
                <   input className="switch-input" type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            </div>
            <div className="alarmCal-card">
            <div className="alarmCasub-card">
                    <input className="radio-input" type="radio"value="alarm" id="alarm"></input>
                    <label className="label-input" htmlFor="alarm">Set alarm</label>
                    </div> 
            </div>
            <div className="form-btns">
                <button>Save</button>
                <button>Delete</button>
            </div>
        </form>
    )
}