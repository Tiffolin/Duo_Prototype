import React from "react";

//NAVIGATION MENU
function Navbar() {
    return (
        <div id="Navbar">
        <span class="destination"><a href="#" >About</a></span>
          <span class="divider">|</span>
        <span class="destination"><a href="#" >Menu</a></span>
            <span class="divider">|</span>
        <span class="destination"><a href="#" >Location & Hours</a></span>
            <span class="divider">|</span>
        <span class="destination"><a href="#" >Place an Order</a></span>            
        </div>
    )
}

export default Navbar;