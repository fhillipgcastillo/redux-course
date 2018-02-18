import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Message from '../components/Message';
import Footer from '../components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with redux</h1>
        </header>
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <Route path="/:filter?" render={ ({match}) => (
              <TodoList filter={match.params.filter}/>
            )}>
            </Route>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
};

/*
const mapDispatchToProps = {updateCurrent};
const mapStateToProps = (state) => state;
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;

== Another example from a different todo app ==
const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
*/
export default App;
