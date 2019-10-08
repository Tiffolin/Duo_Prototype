import React from "react";
import Carousel from 'react-bootstrap/Carousel';
//IMPORT IMAGES FROM GALLERY 
//chocolates
import choco1 from "./images/slides/slide1/1.PNG";
import choco2 from "./images/slides/slide1/2.PNG";
import choco3 from "./images/slides/slide1/3.PNG";
import choco4 from "./images/slides/slide1/4.PNG";
//pastries
import pastrie1 from "./images/slides/slide2/1.PNG";
import pastrie2 from "./images/slides/slide2/2.PNG";
import pastrie3 from "./images/slides/slide2/3.PNG";
import pastrie4 from "./images/slides/slide2/4.PNG";
//cakes
import cake1 from "./images/slides/slide3/1.PNG";
import cake2 from "./images/slides/slide3/2.PNG";
import cake3 from "./images/slides/slide3/3.PNG";
import cake4 from "./images/slides/slide3/4.PNG";

//css stylesheet
import "./subcompStyle/styles.css";

//CAROUSEL OF PRODUCTS
function Slides() {
    return (
        <section id="slideBody">
            <div id="slides1">
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={choco1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={choco2} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={choco3} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={choco4} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="slides2">
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={pastrie1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pastrie2} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pastrie3} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pastrie4} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="slides3">
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100" src={cake1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={cake2} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={cake3} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={cake4} alt="Second slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    )
}



export default Slides;

