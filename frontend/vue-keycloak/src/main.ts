import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false

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

  new Vue({
    router,
    store,
    beforeCreate: function () {
      this.$store.commit('accessToken', keycloak.token || '')
      this.$store.commit('refreshToken', keycloak.refreshToken || '')
    },
    render: h => h(App)
  }).$mount('#app')

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
