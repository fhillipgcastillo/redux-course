import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with redux</h1>
        </header>
        <BrowserRouter>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <Route path="/:filter?" render={ ({match}) => (
              <TodoList filter={match.params.filter}/>
            )}>
            </Route>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

/*
const mapDispatchToProps = {updateCurrent};
const mapStateToProps = (state) => state;
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;
*/

export default App;
