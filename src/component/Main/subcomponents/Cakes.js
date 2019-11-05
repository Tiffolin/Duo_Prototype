import React from "react";
import cadeau from "../subcomponents/images/cakes/cadeau.PNG";
import hazel from "../subcomponents/images/cakes/hazel.PNG";

function Cakes() {
    return (
        <div id="cakes" className="pages">
            <p className="sectionTitle">CAKES</p>
            <div id="menuItemContainer">
                <div id="wholeCakes" className="columnLeft">
                    
                    <dt className="menuTitle">WHOLE CAKES</dt>
                       
                    <div className="cakeList" >
                        <img src={cadeau} className="cakeListImg" alt="cadau"></img>
                        <div className="cakeDescription">
                                <p>Cadeau</p>
                                <p>
                                Toasted white chocolate
                                Esspresso Mousse
                                Flourless Chocolate Sponge
                                </p>
                                <p className="sizing">4 serving / 8 serving</p>
                        </div>
                    </div>
                       

                        {/* <dt className="cakeList" >Mona</dt>
                        <dt className="cakeList" >Cadeau</dt>
                        <dt className="cakeList" >Supernova</dt>
                        <dt className="cakeList" >Yuco</dt>
                        <dt className="cakeList" >Pistache</dt>
                        <dt className="cakeList" >Mix Berries</dt>
                        <dt className="cakeList" >St Honore</dt>
                        <dt className="cakeList" >Lemon Meringe</dt>
                        <dt className="cakeList" >Black Forest</dt>
                        <dt className="cakeList" >Cherry Tart</dt>
                        <dt className="cakeList" >Sicily</dt>
                        <dt className="cakeList" >Autumn</dt> */}

                   
                </div>
                <div id="individualCakes" className="columnRight">
                    
                    <dt className="menuTitle">SINGLE SERVING</dt>
                    <div className="singleCakes">
                        <img src={hazel} className="cakeListImg" alt="hazel"></img>
                            <div className="cakeDescription">
                                <p>Hazel</p>
                                <p>
                                Toasted white chocolate
                                Esspresso Mousse
                                Flourless Chocolate Sponge
                                </p>
                            </div>
                    </div>

                 </div>
            </div>
  
        </div>
    )
}

export default Cakes;