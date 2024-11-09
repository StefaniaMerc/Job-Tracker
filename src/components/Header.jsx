import { useState } from "react";
import Breadcrumb from "./Breadcrumb"
import HamburgerComponent from "./HamburgerComponent";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from "./Menu";


export default function Header(props){
    
    return(
        <header className="header">
            <h3 className="headerTitle"><Link  className="link" to="/Home">Job Tracker</Link></h3>
            <nav className="menu">
                <Menu />
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