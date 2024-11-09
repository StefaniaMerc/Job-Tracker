

export default function Form(){

    return(
        <form className="application-form">
            <div className="card">
                <h4 className="card-title">Informations</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    <input className="card-input" type="text" placeholder="Company name"></input>
                    <div><hr className="solid"/></div>
                    <input className="card-input" type="text" placeholder="Position"></input>
                    <div><hr className="solid"/></div>
                    <input className="card-input" type="text" placeholder="Country"></input>
                    <div><hr className="solid"/></div>
                    <input className="card-input" type="date" placeholder="Date"></input>
                    <div><hr className="solid"/></div>
                    <input className="card-input" type="number" placeholder="Pound £"></input>
                </div>
            </div>
            <div className="card">
                <h4 className="card-title">Experience</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    <ul className="radio-inputs">
                    <li><input className="radio-input" name="expLevel" type="radio" value= "volunteer" id="volunteer"></input>
                    <label className="label-input"  htmlFor="volunteer">Volunteer</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="expLevel" type="radio" value="intern" id="Intern"></input>
                    <label className="label-input" htmlFor="Intern">Intern</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="expLevel" type="radio" value="junior" id="junior" ></input>
                    <label className="label-input" htmlFor="junior">Junior</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="expLevel" type="radio" value="mid" id="mid"></input>
                    <label className="label-input" htmlFor="mid">Mid</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="expLevel" type="radio" value="senior" id="senior"></input>
                    <label className="label-input" htmlFor="senior">Senior</label></li>
                    </ul>
                </div>
            </div>
            <div className="card">
            <h4 className="card-title">Status</h4>
            <div><hr className="menu-solid"/></div>
            <div className="sub-card">
            <ul className="radio-inputs">
                    <li><input className="radio-input" name="status" type="radio" value="applied" id="applied"></input>
                    <label className="label-input" htmlFor="applied">Applied</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="status" type="radio" value="interview" id="interview"></input>
                    <label className="label-input" htmlFor="interview">Interview</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="status" type="radio" value="reject" id="reject" ></input>
                    <label className="label-input" htmlFor="reject">Rejected</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="status" type="radio" value="offer" id="offer"></input>
                    <label className="label-input" htmlFor="offer">Offer</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="status" type="radio" value="hired" id="hired"></input>
                    <label className="label-input" htmlFor="hired">Hired</label></li>
                </ul>
                </div>
            </div>
            <div className="card">
            <h4 className="card-title">Interview</h4>
            <div><hr className="menu-solid"/></div>
            <div className="sub-card">
                <input className="card-input" type="text" placeholder="Place: Birmingham"></input>
                <div><hr className="solid"/></div>
                <input className="card-input" type="datetime-local"></input>
                <div><hr className="solid"/></div>
                <input className="card-input" type="link"></input>
                </div>                
            </div>
            <div className="card">
            <h4 className="card-title">Interview results</h4>
            <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                <ul className="radio-inputs">
                    <li><input className="radio-input" name="result" type="radio" value="success" id="success"></input>
                    <label className="label-input" htmlFor="success">Successful</label></li>
                    <div><hr className="solid"/></div>
                    <li><input className="radio-input" name="result" type="radio" value="rej" id="rej"></input>
                    <label className="label-input" htmlFor="rej">Unsuccessful</label></li>
                    <div><hr className="solid"/></div>
                    </ul>
                </div> 
            </div>
            <div className="card">
            <h4 className="card-title">Comments/Cover Letter</h4>
            <div><hr className="menu-solid"/></div>
            <div className="sub-card">
            <input className="card-input" type="textarea" rows={30} cols={50} placeholder="Comments/Cover Letter"></input>
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
        </form>
    )
}