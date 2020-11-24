import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";

//About
function About() {
    return (
        <div id="about" className="pages">
            <div id="menuItemContainer" className="row justify-content-md-center">
            <p className="sectionTitle">ABOUT </p>
               <div className="columnLeft">
                    <dl>
                        <dt className="menuTitle">Witty, minimalistic designs for the modern Developer</dt>
                        <br></br>
                        <dt>Add some fun to your Developer life with F(P)un filled items.</dt>
                        <br></br>
                        <dt>T-shirts</dt>
                        <dt>Hoodies</dt>
                        <dt>Longsleeves</dt>
                        <dt>Sweaters</dt>
                        <dt>Socks</dt>
                        <dt>Masks</dt>
                        <dt>Others</dt>
                    </dl>
                </div>
                <div className="columnRight">
                    <dl>
                    <dt className="menuTitle"> 為程序開發人員所設計的商品。 設計簡約 ,時尚</dt>
                    <br></br>
                        <dt>幫你身邊的開發員買個特別的禮物吧</dt>
                        <br></br>
                        <dt>T-shirts</dt>
                        <dt>帽-T</dt>
                        <dt>長袖衫</dt>
                        <dt>厚長袖</dt>
                        <dt>袜子</dt>
                        <dt>口罩</dt>
                        <dt>其他</dt>
     
                    </dl>
                </div>
            </div>
  
        </div>
    )
}
export default About;