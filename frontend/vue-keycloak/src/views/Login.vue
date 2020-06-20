<template>
  <div class="login">
    <p>{{ preferredName }}</p>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      preferredName: ''
    }
  },
  methods: {
    login: function () {
      axios.get('/authsample/users')
        .then(response => {
          this.preferredName = response.data
        })
        .catch(reason => {
          console.log(reason)
        })
    }
  }
}
</script>

<style scoped>

</style>
