import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from ",.components/Main";
import Footer from ",.components/Footer";

class App extends Component{
  render() {
    return(
      <div id='App'>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
    );
  }
}

export default App;
