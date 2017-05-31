<template>
  <div class="seat-info">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'seat-info',
  data () {
    return {
      msg: 'Choose Seat'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
