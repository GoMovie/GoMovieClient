<!-- home page -->
<template>
  <div class="home">
    <h1 v-if="ok === true">成功！</h1>
    <h1 v-if="ok === false">失败！</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      ok: null
    }
  },
  mounted: async function () {
    try {
      await this.$http.get('/movies')
      this.ok = true
    } catch (error) {
      this.ok = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.home-pages {
  position: absolute;
  bottom: 10px;
}

.home-carousel-container {
  margin-bottom: 15px;
}

/* define carousel items */
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 400px;
  margin: 0;
}
</style>
