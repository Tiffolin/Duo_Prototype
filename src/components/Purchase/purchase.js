import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import amazon from "./amazon.PNG";
import teespring from "./Teespring.PNG";
import society6 from "./society6.PNG";
import redbubble from "./redbubble.PNG";

//Purchase
function Purchase() {
    return (
        <div id="purchase" className="row justify-content-md-center">

            <div id="snsContainer purchaseContainer ">
                    <a href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AZzz_Merch&ref=bl_sl_s_ap_web_7141123011">
                        <span id="amazon"><img src={amazon} className="purchastImg img-fluid" alt="..."></img></span>
                    </a>
                    <a href="https://teespring.com/stores/zzz-merch-merch">
                        <span id="teespring"><img src={teespring} className="purchastImg img-fluid" alt="..."></img></span>
                    </a>

                    <a href="https://society6.com/zzz_merch">
                        <span id="society6"><img src={society6} className="purchastImg img-fluid" alt="..."></img></span>
                    </a>

                    <a href="https://www.redbubble.com/people/zzzmerch/shop">
                        <span id="redbubble"><img src={redbubble} className="purchastImg img-fluid" alt="..."></img></span>
                    </a>
             </div>   
         

        </div>
    )
}
export default Purchase;