import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo} from "../reducers/todo";

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)}
    /> {name}
    <span className="delete-item">
      <button onClick={() => deleteTodo(id)} >x</button>
    </span>
  </li>
);

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodos()
  };
  render(){
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
            />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({todos: state.todo.todos}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);
