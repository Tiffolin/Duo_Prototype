import React from "react";
import cake from "./images/cakes/1.PNG";
import pastry from "./images/pastries/2.PNG";
import chocolate from "./images/chocolates/1.PNG";



function Menu() {
    return (
        <div id="Menu">
            <p className="sectionTitle">MENU </p>

            <div id="menuItemContainer">

                <div className=" overlay-image _9u "><a href="LINK_URL">
                    <img className=" image _9v menuImg " src={cake} alt="Alt text" />
                    <div className=" normal _9x ">
                        <div className=" text _2 ">Image + text ORIGINAL</div>
                    </div>
                    <div className=" hover _9w ">
                        <div className=" text _2 ">Background + text HOVER</div>
                    </div>
                    </a>
                </div>


                {/* <div className="menuItemsWrapper">
                    <img className="menuImg" src={cake}></img>
                    <div className="overlay">CAKE</div>
                </div>

                <div className="menuItemsWrapper">
                    <img className="menuImg" src={pastry}></img>
                    <a href="#"><div className="overlay"></div></a>
                </div>

                <div className="menuItemsWrapper">
                    <img className="menuImg" src={chocolate}></img>
                    <a href="#"><div className="overlay"></div></a>
                </div>           */}
            </div>
  
        </div>
    )
}

export default Menu;