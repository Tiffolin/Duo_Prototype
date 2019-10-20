import React from "react";
import cake from "./images/cakes/1.PNG";
import pastry from "./images/pastries/2.PNG";
import chocolate from "./images/chocolates/1.PNG";

function Menu() {
    return (
        <div id="Menu">
        <p className="sectionTitle">MENU </p>
            <div id="menuItemContainer">
                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={cake} alt="Alt text" />
                    <p className="menuText">CAKE</p>
                </div>
                
                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={pastry} alt="Alt text" />
                    <p className="menuText">PASTRY</p>
                </div>
          
                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={chocolate} alt="Alt text" />
                    <p className="menuText">CHOCOLATE</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;