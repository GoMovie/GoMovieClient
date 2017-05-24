<template>
  <div class="profile">
    <top-bar></top-bar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import TopBar from '../components/top-bar'

export default {
  name: 'profile',
  data () {
    return {
      msg: 'personal profile'
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
