<template>
  <div class="hello">
    <top-bar></top-bar>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import TopBar from '../components/top-bar'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue, this is home page'
    }
  },
  components: {
    'top-bar': TopBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
