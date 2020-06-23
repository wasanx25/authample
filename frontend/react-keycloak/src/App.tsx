import React from 'react'
import UserTable from './components/UserTable'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { CardPage } from './pages/CardPage'
import 'bulma/css/bulma.css'
import styles from './App.module.css'

function App () {
  return (
    <Router>
      <div className='container'>
        <ul className={styles.navigation}>
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
      </div>

      <hr className={styles.headerLine}/>

      <div className='container'>
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
      </div>
    </Router>
  )
}

export default App
