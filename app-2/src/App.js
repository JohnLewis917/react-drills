import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ["dog", "cat", "bird", "deer"]
    }
  }
  render() {
    let listToDisplay = this.state.list.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className='App'>
        {listToDisplay}

      </div>

    );
  }
}

export default App;
