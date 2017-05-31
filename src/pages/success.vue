<template>
  <div class="success">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'success',
  data () {
    return {
      msg: 'purchase successfully'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
