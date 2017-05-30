<template>
  <div class="movie-info">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-col class="movie-info__up-part" :span="24"></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="movie-info__left-part" :span="14"></el-col>
      <el-col class="movie-info__right-part" :span="10"></el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from '../components/top-bar'

export default {
  name: 'movie-info',
  data () {
    return {
      msg: 'Movie Info'
    }
  },
  components: {
    'top-bar': TopBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* debug */
.movie-info__up-part, .movie-info__left-part, .movie-info__left-part {
  background-color: rgba(0, 0, 0, 0.5);
}

.movie-info__up-part {

}

.movie-info__left-part {

}

.movie-info__left-part {

}
</style>
