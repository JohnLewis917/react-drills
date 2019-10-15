import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      todoList: [],
      newInput: '',
    }
  this.handleAdd = this.handleAdd.bind(this);

  }
  handleChange(value){
    this.setState({newInput: value})
  }
  handleAdd(){
    this.setState({todoList: [...this.state.todoList, this.state.newInput], newInput: ""})
  }

  render() {
    let todoList = this.state.todoList.map((element, index) => {return <Todo key={index} task={element}/>})
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <div>
          <input
          value={this.state.newInput}
          placeholder='Enter New Task'
          onChange={e => this.handleChange(e.target.value)}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>

        {todoList}

      </div>
    );
  }
}

export default App;
