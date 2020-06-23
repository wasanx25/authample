import React from 'react'
import UserTable from './components/UserTable'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { CardPage } from './pages/CardPage'

function App () {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/cards'>Cards</Link>
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
        <Route path='/cards'>
          <div>
            <CardPage/>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
