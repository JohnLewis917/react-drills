import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from'./Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"http://i2.ebayimg.com/08/i/000/d6/90/880d_45.JPG"}/>
      </div>
    );
  }
}

export default App;
