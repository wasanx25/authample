<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PlayerTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerTable from '@/components/PlayerTable.vue'

export default {
  name: 'Home',
  components: {
    PlayerTable
  }
}
</script>
