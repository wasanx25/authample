import React from 'react';
import './App.css';
import UserTable from './components/UserTable'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about' >About</Link>
        </li>
        <li>
          <Link to='/users' >Users</Link>
        </li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path='/'>
          <div>
            <h2>Hello Home</h2>
          </div>
        </Route>
        <Route path='/about'>
          <div>
            <h2>About</h2>
          </div>
        </Route>
        <Route path='/users'>
          <div>
            <UserTable/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
