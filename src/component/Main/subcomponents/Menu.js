import React from "react";
import cake from "./images/cakes/1.PNG";
import pastry from "./images/pastries/2.PNG";
import chocolate from "./images/chocolates/1.PNG";
import latteArt from "./images/drinks/latteArt.PNG";
import poundCake from "./images/poundcakes/pc2.PNG";
import retail from "./images/retail/ldc.PNG";

function Menu() {
    return (
        <div id="menu">
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
                    <img className=" menuImg img-fluid " src={latteArt} alt="Alt text" />
                    <p className="menuText">DRINKS</p>
                </div>

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={chocolate} alt="Alt text" />
                    <p className="menuText">CHOCOLATES</p>
                </div>

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={poundCake} alt="Alt text" />
                    <p className="menuText">TRAVEL CAKES</p>
                </div>

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={retail} alt="Alt text" />
                    <p className="menuText">RETAIL</p>
                </div>

            </div>
        </div>
    )
}

export default Menu;