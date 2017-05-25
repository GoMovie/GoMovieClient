<template>
  <div class="trade-board">
    <top-bar></top-bar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import TopBar from '../components/top-bar'

export default {
  name: 'trade-board',
  data () {
    return {
      msg: 'Trade board'
    }
  },
  components: {
    'top-bar': TopBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
