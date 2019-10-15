import React, {Component} from 'react'

class Todo extends Component{ 
    render(){
        return(
           <p>{this.props.tasks}</p> 
        )
    }
}
export default Todo 