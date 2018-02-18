import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
          <div>
            <Route path='/todos' render={ ({match}) => (
              <div className="Todo-App">
                <Message />
                <TodoForm />
                <Route path="/todos/:filter?" render={ ({match}) => (
                  <TodoList filter={match.params.filter} />
                )}>
                </Route>
                <Footer />
              </div>
            )} ></Route>
            <Route exact path='/about' render={({match}) => (
              <div>
                <h1>Todo app</h1>
                <span className="text">{"This was developed by Fhillip G. Castillo applying react and redux"}</span>
              </div>
            )}></Route>
            <div className="page-footer" style={{marginTop:20, textDecoration:'none'}}>
              <Link to="/todos">Todos App</Link>
              <Link to="/about">About</Link>
            </div>
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
