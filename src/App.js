import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/todo-list';
import TryComponent from './components/Try/try';

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <Switch>
            <Route exact path="/">
              <TodoList/>
            </Route>
            <Route path="/todo">
              <TodoList/>
            </Route>
            <Route path="/pokemon">
              <TryComponent/>
            </Route>
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path="/">
              <a
                  className="App-link"
                  href="/pokemon"
                  rel="noopener noreferrer"
              >
                Go to Pokemons
              </a>
            </Route>
            <Route path="/todo">
              <a
                className="App-link"
                href="/pokemon"
                rel="noopener noreferrer"
              >
                Go to Pokemon
              </a>
            </Route>
            <Route path="/pokemon">
              <a
                  className="App-link"
                  href="/todo"
                  rel="noopener noreferrer"
              >
                Go to todo
              </a>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
