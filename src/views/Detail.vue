<template>
  <div class="detail">
    <h1>Now: {{ this.$route.params.id }}</h1>
    <p>
      Prev:
      <router-link :to="{ params: { id: minusOne } }">{{ minusOne }}</router-link>
      Next:
      <router-link :to="{ params: { id: plusOne } }">{{ plusOne }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    minusOne: function () {
      const paramId = Number.parseInt(this.$route.params.id)
      if (Number.isNaN(paramId)) {
        return 1
      }
      return paramId - 1
    },
    plusOne: function () {
      const paramId = Number.parseInt(this.$route.params.id)
      if (Number.isNaN(paramId)) {
        return 1
      }
      return paramId + 1
    }
  }
}
</script>
