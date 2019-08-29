import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from ",.components/Footer";


class App extends Component{
  render() {
    return(
      <div id='App'>
      <Header />
      <Navbar />
      <Footer />
    </div>
    );
  }
}

export default App;
