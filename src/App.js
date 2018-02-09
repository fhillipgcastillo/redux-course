import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {bindActionCreators} from "redux";
import {updateCurrent} from "./reducers/todo";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with redux</h1>
        </header>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
            />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
};


const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch);
const mapStateToProps = (state) => state;
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
