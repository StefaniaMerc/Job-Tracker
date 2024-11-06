export default function Form(){
    return(
        <form className="application-formm">
            <div className="card">
                <h4 className="card-title">Informations</h4>
                <input className="card-input" type="text" placeholder="Company name"></input>
                <input className="card-input" type="text" placeholder="Position"></input>
                <input className="card-input" type="text" placeholder="Country"></input>
                <input className="card-input" type="date" placeholder="Date"></input>
                <input className="card-input" type="number" placeholder="Pound £"></input>
            </div>
            <div className="card">
                <h4 className="card-title">Experience</h4>
                    
                    <input className="card-input" type="radio" id="volunteer"></input>
                    <label for="volunteer">Volunteer</label><br></br>
                    
                    <input className="card-input" type="radio" id="Intern"></input>
                    <label for="Intern">Intern</label><br></br>
                    
                    <input className="card-input" type="radio" id="junior" ></input>
                    <label for="junior">Junior</label><br></br>
                    
                    <input className="card-input" type="radio" id="mid"></input>
                    <label for="mid">Mid</label><br></br>
                    
                    <input className="card-input" type="radio" id="senior"></input>
                    <label for="senior">Senior</label><br></br>
                    
                
            </div>
            <div className="card">
                
            </div>
            <div className="card">
                
            </div>
            <div className="card">
                
            </div>
            <div className="card">
                
            </div>
            <div className="card">
                
            </div>
            <div className="card">
                
            </div>
            <div className="card">
                
            </div>
        </form>
    )
}