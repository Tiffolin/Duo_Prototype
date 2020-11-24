import React from "react";
import Carousel from 'react-bootstrap/Carousel';
//IMPORT IMAGES FROM GALLERY 
import L1 from "./slidesImg/slideLeft/1.png";
import L2 from "./slidesImg/slideLeft/2.png";
import L3 from "./slidesImg/slideLeft/3.png";
import M1 from "./slidesImg/slideMiddle/1.png";
import M2 from "./slidesImg/slideMiddle/2.png";
import M3 from "./slidesImg/slideMiddle/3.png";
import R1 from "./slidesImg/slideRight/1.png";
import R2 from "./slidesImg/slideRight/2.png";
import R3 from "./slidesImg/slideRight/3.png";
//css stylesheet
import "../style.css";


//CAROUSEL OF PRODUCTS
function LandingPage() {
    return (
        <div id="Land">
            <section id="slideBody">
                <div id="slides1">
                    <Carousel>
                        <Carousel.Item>
                        <img className="d-block w-100" src={L1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={L2} alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={L3} alt="Third slide"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="slides2">
                    <Carousel>
                        <Carousel.Item>
                        <img className="d-block w-100" src={M1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={M2} alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={M3} alt="Third slide"/>
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div id="slides3">
                    <Carousel>
                        <Carousel.Item>
                        <img className="d-block w-100" src={R1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={R2} alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src={R3} alt="First slide"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <div id="blank"></div>
        </div>
    )
}



export default LandingPage;