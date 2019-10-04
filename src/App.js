import React, { Component } from 'react';
// import './App.css';
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Footer from "./component/Footer";

class App extends Component{
  render() {
    return(
      <div id='App'>
      <Header />
      <Navbar />
      <Main />
      <Footer/>
    </div>
    );
  }
}

export default App;
