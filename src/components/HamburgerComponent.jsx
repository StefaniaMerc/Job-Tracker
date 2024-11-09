import Hamburger from "hamburger-react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from "./Menu";

'use client';

export default function HamburgerComponent(){
    const [open, setOpen] = useState(false)
    return (
        <div className="burger-menu">
            <Hamburger
                toggled={open}
                toggle={setOpen} />
            {open && <div className="mob-menu">
                <h4 className="mob-menu-title">Menu</h4>
                <div><hr className="menu-solid"/></div>
                <Menu/>
            </div>}
        </div>
        )
}