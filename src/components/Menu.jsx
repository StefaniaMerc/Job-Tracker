import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Menu(){

    return(
        <ul>
            <li><Link className="link" to="/AddApplication">Add application</Link></li>
            <div><hr className="solid"/></div>
            <li><Link className="link" to="/recentApplications">Recent application</Link></li>
            <div><hr className="solid"/></div>
            <li><Link className="link" to="/calendar">Calendar</Link></li>
            <div><hr className="solid"/></div>
            <li><Link className="link" to="/stats">Statistics</Link></li>
            <div><hr className="solid"/></div>
            <li><Link className="link" to="/archive">Archive</Link></li>
        </ul> 
    )
}