import React from "react";
import cake from "./images/cakes/1.PNG";
import pastry from "./images/pastries/2.PNG";
import chocolate from "./images/chocolates/1.PNG";



function Menu() {
    return (
        <div id="Menu">
            <p className="sectionTitle">MENU </p>

        <div id="menuItemBox">
            <span class="menuItems"><a href="#" ><img src={cake}></img></a></span>

            <span class="menuItems"><a href="#" ><img src = {pastry}></img></a></span>  
               
            <span class="menuItems"><a href="#" ><img src = {chocolate}></img></a></span>
         
        </div>
  
        </div>
    )
}

export default Menu;