import { useState } from "react";
import Breadcrumb from "./Breadcrumb"
import HamburgerComponent from "./HamburgerComponent";


export default function Header(props){
    
    return(
        <header className="header">
            <h3 className="headerTitle">Job Tracker</h3>
            <nav className="menu">
                <ul>
                    <li>Add application</li>
                    <li>Recent application</li>
                    <li>Calendar</li>
                    <li>Statistics</li>
                    <li>Archive</li>
                </ul>
            </nav>
            <div className="burger">
                <HamburgerComponent />
            </div>
            <div>
                <Breadcrumb name={props.name}/>
            </div>
        </header>
        )
    }