<template>
  <div class="movie-info">
    <el-row>
      <el-breadcrumb class="movie-info__title">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item> {{limitStrLen(movieInfo.title, 4)}} </el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <div class="movie-info__up-part">
      <basic-info :movieInfo="movieInfo"></basic-info>
    </div>
    <div class="movie-info__bottom-part">
      <div class="movie-info__des-title">电影简介</div>
      <hr />
      <div class="movie-info__description">{{ movieDescription }}</div>
    </div>
  </div>
</template>

<script>
import { limitStrLen } from '@/lib/util.js'

export default {
  name: 'movie-info',
  data () {
    return {
      movieId: -1,
      movieDescription: ''
    }
  },
  computed: {
    movieInfo: function () {
      let movies = this.$store.state.movies
      return movies.filter((movie) => movie.id === this.movieId)[0]
    }
  },
  components: {
    'top-bar': require('../components/top-bar'),
    'basic-info': require('../components/movie-info/basic-info')
  },
  methods: {
    limitStrLen
  },
  created: async function () {
    this.movieId = +this.$route.query.movieId
    let {data} = await this.$http.get(`/movies/${this.movieId}/details`)
    this.movieDescription = data.summary
  }
}
</script>

<style scoped>
.movie-info__up-part {
  margin-bottom: 40px;
}

.movie-info__bottom-part {
  margin-bottom: 30px;
}

.movie-info {
  text-align: left;
  width: 70%;
  margin: 0 auto;
}

.movie-info__des-title {
  font-weight: bold;
  font-size: 24px;
  color: RGBA(223, 45, 45, 1.00);
  margin-top: 20px;
  margin-bottom: 5px;
}

.movie-info__title {
  padding: 20px 0;
  font-size: 24px;
}
</style>
