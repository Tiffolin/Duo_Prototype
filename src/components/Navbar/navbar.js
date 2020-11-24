import React from "react";
import {NavLink} from "react-router-dom";

//NAVIGATION MENU
function Navbar() {
    return (
        <div id="Navbar">
        <NavLink to = "/About" className={"navlinks"}> 
            <span class="destination"><a href="#" >About</a></span>
        </NavLink>
          <span class="divider">|</span>
        <NavLink to = "/Products" className={"navlinks"}> 
        <span class="destination"><a href="#" >Products</a></span>
        </NavLink>
            <span class="divider">|</span>
        <NavLink to = "/Purchase" className={"navlinks"}> 
        <span class="destination"><a href="#" >Purchase</a></span>
        </NavLink>
            <span class="divider">|</span>
        <NavLink to = "/Contact" className={"navlinks"}> 
        <span class="destination"><a href="#" >Contact</a></span> 
        </NavLink>           
        </div>
    )
}

export default Navbar;