<template>
  <div class="detail">
    <h1>Now: {{ number }}</h1>
    <p>
      Prev:
      <router-link :to="{ params: { name: 'detail', id: minusOne } }">{{ minusOne }}</router-link>
      Next:
      <router-link :to="{ params: { name: 'detail', id: plusOne } }">{{ plusOne }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NumberView',
  props: ['number'],
  computed: {
    minusOne: function () {
      const paramId = Number.parseInt(this.$props.number)
      if (Number.isNaN(paramId)) {
        return 1
      }
      return paramId - 1
    },
    plusOne: function () {
      const paramId = Number.parseInt(this.$props.number)
      if (Number.isNaN(paramId)) {
        return 1
      }
      return paramId + 1
    }
  }
}
</script>
