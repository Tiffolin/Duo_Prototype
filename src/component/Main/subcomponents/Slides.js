import React from "react";
import Carousel from 'react-bootstrap/Carousel';
//images from gallery
import chocobox from "./images/slides/chocobox.PNG";
import pastries3 from "./images/slides/pastries3.PNG";
import mb from "./images/slides/mb.PNG";
//css stylesheet
import "./subcompStyle/styles.css";

//CAROUSEL OF PRODUCTS
function Slides() {
    return (
        <div id="slideBody">
            <div id="slides1">
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={chocobox} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pastries3} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={mb} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="slides2">
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={chocobox} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pastries3} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={mb} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="slides3">
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={chocobox} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pastries3} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={mb} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}



export default Slides;

