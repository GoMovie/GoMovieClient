<template>
  <div class="confirm-order">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'confirm-order',
  data () {
    return {
      msg: 'Confirm your order:)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
