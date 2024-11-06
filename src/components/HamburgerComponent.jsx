import Hamburger from "hamburger-react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

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
                <ul>
                    <li>Add application</li>
                    <div><hr className="solid"/></div>
                    <li>Recent application</li>
                    <div><hr className="solid"/></div>
                    <li>Calendar</li>
                    <div><hr className="solid"/></div>
                    <li>Statistics</li>
                    <div><hr className="solid"/></div>
                    <li>Archive</li>
                </ul>
            </div>}
        </div>
        )
}