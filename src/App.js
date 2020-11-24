import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/header.js";
import Navbar from "./components/Navbar/navbar.js";
import LandingPage from "./components/LandingPage/landing.js";
import About from "./components/About/about.js";
import Products from "./components/Products/products.js";
import Purchase from "./components/Purchase/purchase.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

class App extends Component{
  render() {
    return(
  <div id='App'>
      <BrowserRouter>        
        <div>
          <Header />
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Purchase" component={Purchase} />
          <Route exact path="/Contact" component={Contact} />
          <Footer/>
        </div>
    </BrowserRouter>   
  </div>
    );
  }
}

export default App;
