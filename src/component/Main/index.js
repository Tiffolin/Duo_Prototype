import React from "react";
import Slides from "./subcomponents/Slides"
import Menu from "./subcomponents/Menu";
import Pastries from "./subcomponents/Pastries";
import Cakes from "./subcomponents/Cakes";
import Drinks from "./subcomponents/Drinks";
// import Chocolates from "./subcomponents/Chocolates";
// import PoundCakes from "./subcomponents/PoundCakes";

function Main() {
    return (
        <div id="Main">
            <Slides />
            <Menu />
            <Pastries />
            <Cakes />
            <Drinks />

        </div>
    )
}

export default Main;