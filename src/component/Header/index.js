import React from "react";
import logo from "./logo.jpg";
import "../stylingForComponents/style.css";
//LOGO of Store

function Header() {
    return (
        <div id="header">
            <img alt="logo" src={logo} className="img-fluid"/>
        </div>
    )
}

export default Header;