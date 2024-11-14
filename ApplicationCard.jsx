export default function ApplicationCard(){
    return(
        <div className="application-cards">
            <div className="application-btns">
                <button className="form-button">Search application</button>
                <button className="form-button">Edit application</button>
            </div>
        <div className="application-card">
                <h4 className="card-title">Today</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                </div>
         </div>
         <div className="application-card">
                <h4 className="card-title">Yesterday</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                </div>
         </div>
         <div className="application-card">
                <h4 className="card-title">14/11/2024</h4>
                <div><hr className="menu-solid"/></div>
                <div className="sub-card">
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>
                    <h5 className="application-input">Application title - Company</h5>                    
                </div>
         </div>
         </div>
            
    )
}