import React from "react";
import Tshirt from "./productsImg/soulBlack.png";
import longsleeve from "./productsImg/MakeMe.png";
import hoodie from "./productsImg/SmarmyGit2.png";
import sweaters from "./productsImg/awkwardCool.png";
import masks from "./productsImg/facemask2.PNG";
import prints from "./productsImg/1plus1.png";
import "../style.css";


function Products() {
    return (
        <div id="menu">
        <p className="sectionTitle">PRODUCTS </p>
            <div id="menuItemContainer">

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={Tshirt} alt="Alt text" />
                    <p className="menuText">T-Shirt</p>
                </div>
          
                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={longsleeve} alt="Alt text" />
                    <p className="menuText">Longsleeves</p>
                </div>

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={hoodie} alt="Alt text" />
                    <p className="menuText">Hoodies</p>
                </div>

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={sweaters} alt="Alt text" />
                    <p className="menuText">Sweaters</p>
                </div>

                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={masks} alt="Alt text" />
                    <p className="menuText">Masks</p>
                </div>
                <div className=" overlay-image  ">                
                    <img className=" menuImg img-fluid " src={prints} alt="Alt text" />
                    <p className="menuText">Prints</p>
                </div>

            </div>
        </div>
    )
}

export default Products;