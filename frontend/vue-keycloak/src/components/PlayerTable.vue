<template>
    <div>
      <input type='text' v-model='filterWord' v-on:input="filterName">
      <p>{{ filterPlayers }}</p>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
        </thead>
        <tbody v-for="(player, key) in players" :key="key">
        <tr>
          <td>{{ player.name }}</td>
          <td>{{ player.age }}</td>
          <td>{{ player.salary }}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'PlayerTable',
  data: function () {
    return {
      players: [
        {
          name: 'Fue',
          age: '20',
          salary: '20000000'
        },
        {
          name: 'Hoe',
          age: '31',
          salary: '1000000000'
        },
        {
          name: 'Boo',
          age: '40',
          salary: '50000000000'
        }
      ],
      filterWord: '',
      filterPlayers: []
    }
  },
  methods: {
    filterName: function () {
      this.filterPlayers = this.players.filter(player => {
        return player.name.toLowerCase().startsWith(this.filterWord.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>

</style>
