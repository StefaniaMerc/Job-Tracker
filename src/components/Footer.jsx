export default function Footer(){
    return(
    <footer>
            <div className="des-footer">
                <div className="footer-links">
                    <ul>
                        <li>Add application</li>
                        <li>Recent application</li>
                        <li>Calendar</li>
                        <li>Statistics</li>
                        <li>Archive</li>
                    </ul>
                </div>
                <div><h4>©2024 Bartalini-Mercurio</h4></div>
            </div>
            <div className='mob-footer'>
                <button className="icon">
                    <img src="Back.png" alt="" />
                </button>
                <button className="icon">
                    <img src="AddApp.png" alt="" />
                </button>
                <button className="icon">
                    <img src="Stats.png" alt="" />
                </button>
                <button className="icon">
                    <img src="Cal.png" alt="" />
                </button>
            </div>
    </footer>
)}