import React from "react";
import Carasel from "./subcomponents/Carasel"
import Menu from "./subcomponents/Menu";
import Pastries from "./subcomponents/Pastries";
import Cakes from "./subcomponents/Cakes";
import Drinks from "./subcomponents/Drinks";
import Chocolates from "./subcomponents/Chocolates";
import PoundCakes from "./subcomponents/PoundCakes";

function Main() {
    return (
        <div id="Main">
            <Carasel />
            <Menu />
            <Pastries />
            <Cakes />
            <Drinks />
            <Chocolates />
            <PoundCakes />
        </div>
    )
}

export default Main;