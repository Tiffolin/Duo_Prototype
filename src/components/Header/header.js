import React from "react";
import {NavLink} from "react-router-dom";
import logo from "./logo.png";
import "../style.css";
//LOGO of Store
function Header() {
    return (
        <div id="header">
            <NavLink to = "/" className={"navlinks"}> 
                <img alt="logo" src={logo} className="img-fluid"/>
            </NavLink>
        </div>
    )
}

export default Header;