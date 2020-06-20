import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'
import Keycloak from 'keycloak-js'

const options = {
  url: 'http://localhost:8081/auth',
  realm: 'SampleAuth',
  clientId: 'login-app'
}

const keycloak = Keycloak(options)

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  if (authenticated) {
    console.log('Authenticated')
  } else {
    console.log('Not Authenticated')
    window.location.reload()
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

  setInterval(() => {
    keycloak.updateToken(30).then((refreshed) => {
      if (refreshed) {
        console.log('Token refreshed')
      } else {
        console.warn('Token not refreshed, valid for ')
      }
    }).catch((error) => {
      console.error('Failed to refresh token: ' + error)
    })
  }, 60 * 1000)
}).catch((error) => {
  console.log('Authenticated Failed: ' + error)
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
