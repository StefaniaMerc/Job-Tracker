export default function Form(){
    return(
        <form className="application-form">
            <div className="card">
                <h4 className="card-title">Informations</h4>
                <div className="sub-card">
                    <input className="card-input" type="text" placeholder="Company name"></input>
                    <input className="card-input" type="text" placeholder="Position"></input>
                    <input className="card-input" type="text" placeholder="Country"></input>
                    <input className="card-input" type="date" placeholder="Date"></input>
                    <input className="card-input" type="number" placeholder="Pound £"></input>
                </div>
            </div>
            <div className="card">
                <h4 className="card-title">Experience</h4>
                <div className="sub-card">
                    <ul className="radio-inputs">
                    <li><input className="radio-input" type="radio" id="volunteer"></input>
                    <label className="label-input" for="volunteer">Volunteer</label></li>
                    <li><input className="radio-input" type="radio" id="Intern"></input>
                    <label className="label-input" for="Intern">Intern</label></li>
                    <li><input className="radio-input" type="radio" id="junior" ></input>
                    <label className="label-input" for="junior">Junior</label></li>
                    <li><input className="radio-input" type="radio" id="mid"></input>
                    <label className="label-input" for="mid">Mid</label></li>
                    <li><input className="radio-input" type="radio" id="senior"></input>
                    <label className="label-input" for="senior">Senior</label></li>
                    </ul>
                </div>
            </div>
            <div className="card">
            <h4 className="card-title">Status</h4>
            <div className="sub-card">
            <ul className="radio-inputs">
                    <li><input className="radio-input" type="radio" id="applied"></input>
                    <label className="label-input" for="applied">Applied</label></li>
                    <li><input className="radio-input" type="radio" id="interview"></input>
                    <label className="label-input" for="interview">Interview</label></li>
                    <li><input className="radio-input" type="radio" id="reject" ></input>
                    <label className="label-input" for="reject">Rejected</label></li>
                    <li><input className="radio-input" type="radio" id="offer"></input>
                    <label className="label-input" for="offer">Offer</label></li>
                    <li><input className="radio-input" type="radio" id="hired"></input>
                    <label className="label-input" for="hired">Hired</label></li>
                </ul>
                </div>
            </div>
            <div className="card">
            <h4 className="card-title">Interview</h4>
            <div className="sub-card">
                <input className="card-input" type="text" placeholder="Place: Birmingham"></input>
                <input className="card-input" type="datetime-local"></input>
                <input className="card-input" type="link"></input>
                </div>                
            </div>
            <div className="card">
            <h4 className="card-title">Interview results</h4>
                <div className="sub-card">
                <ul className="radio-inputs">
                    <li><input className="radio-input" type="radio" id="success"></input>
                    <label className="label-input" for="success">Successful</label></li>
                    <li><input className="radio-input" type="radio" id="rej"></input>
                    <label className="label-input" for="rej">Unsuccessful</label></li>
                    </ul>
                </div> 
            </div>
            <div className="card">
            <h4 className="card-title">Comments/Cover Letter</h4>
            <div className="sub-card">
            <input className="card-input" type="textarea" placeholder="Comments/Cover Letter"></input>
            </div>
            </div>
            <div className="card">
            <div className="sub-card">
                <label className="label-input">Add to calendar</label>
                <label className="switch">
                <   input className="switch-input" type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            </div>
            <div className="card">
            <div className="sub-card">
                    <input className="radio-input" type="radio" id="alarm"></input>
                    <label className="label-input">Set alarm</label>
                    </div> 
            </div>
        </form>
    )
}