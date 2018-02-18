import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  updateCurrent
} from '../actions';
import { saveTodo } from "../reducers/todo";

class TodoForm extends Component {
  handleInputChange = (event)=>{
    const value = event.target.value;
    this.props.updateCurrent(value);
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  };
  render(){
    const {currentTodo} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={currentTodo}
          onChange={this.handleInputChange}
          />
      </form>
    )
  }
};

export default connect(
  (state) => ({currentTodo: state.todo.currentTodo}),
  {updateCurrent, saveTodo}
)(TodoForm)
