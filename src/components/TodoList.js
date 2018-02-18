import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo} from "../actions";
import {getVisibleTodos} from '../reducers/todo';

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

// this bellow will be the container for TodoList which will import the user at the end
export default connect(
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);
