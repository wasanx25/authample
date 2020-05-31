<template>
  <NumberView :number="this.$route.params.id"/>
</template>

<script>
import NumberView from '@/components/NumberView'
export default {
  name: 'Detail',
  components: { NumberView }
}
</script>
