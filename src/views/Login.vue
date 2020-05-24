<template>
  <div class="login">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  methods: {
    login: function () {
      axios.get('http://localhost:8080/login')
        .then(response => {
          window.location.href = response.data
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
