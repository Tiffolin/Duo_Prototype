import React from "react";

function Drinks() {
    return (
        <div id="drinks" className="pages">
        <p className="sectionTitle">DRINKS</p>
        <div id="menuItemContainer">
            <div id="esspresso" className="columnLeft">
                <dl>
                <dt className="menuTitle">ESSPRESSO BASED</dt>
                    <dt>Esspresso</dt>
                    <dt>Latte</dt><dd>Hot/Ice</dd>
                    <dt>Cappucino</dt><dd>Hot/Ice</dd>
                    <dt>Flat White</dt>
                    <dt>Cafe Au Le</dt>
                    <dt>Americano</dt><dd>Hot/Ice</dd>
                    <dt>Caramel Latte</dt><dd>Hot/Ice</dd>
                    <dt>Mocha</dt><dd>Hot/Ice</dd>
                </dl>
            </div>
            <div id="other" className="columnRight">
                <dl>
                    <dt className="menuTitle">SPECIALTY DRINKS</dt>
                    <dt>Matcha Latte</dt><dd>Hot/Ice</dd>
                    <dt>Black Sesame Latte</dt>
                    <dt>Duo Specialty Latte</dt><dd>Hot/Ice</dd>
                    <dt>Red Bean Latte</dt>
                    <dt>Hot Chocolate</dt><dd>Hot/Ice</dd>
                    <dt className="menuTitle">TEA</dt>
                    <dt>Early Grey</dt>
                    <dt>English Breakfast</dt>
                    <dt>Oolong Rose</dt>
                    <dt>Oolong Lavender</dt>
                    <dt>Mint</dt>
                    <dt>Jasmine</dt>
                    <dt>Japanese Sencha</dt>
                    <dt>Cammomile</dt>
                </dl>
            </div>

        </div>

    </div>
    )
}

export default Drinks;