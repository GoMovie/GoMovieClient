<template>
  <div class="cinema-info">
    <el-row>
      <el-breadcrumb class="cinema-info__title">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="goBackPath">{{movieTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>选择电影院</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="11" class="cinema-info__choose-cinema">
        <cinema-item v-for="(cinema, index) in cinemas"
          :cinema="cinema"
          :select="index === curSelectCinema"
          :key="cinema.name"
          @click.native="selectCinemaItem(index)">
        </cinema-item>
      </el-col>
      <el-col :span="13">
        <choose-room
          :movieId="curMovieId"
          :cinemaId="curSelectCinemaId"></choose-room>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'cinema-info',
  data () {
    return {
      bufferedMovieInfo: {},
      curSelectCinema: 0,
      film: '加勒比海盗5：死无对证'
    }
  },
  components: {
    'cinema-item': require('../components/cinema-info/cinema-item'),
    'choose-room': require('../components/cinema-info/choose-room')
  },
  computed: {
    cinemas: function () {
      return this.$store.state.cinemas
    },
    movieTitle: function () {
      return this.bufferedMovieInfo.title
    },
    goBackPath: function () {
      let curId = this.$route.query.movieId
      return `/movie-info?movieId=${curId}`
    },
    curMovieId: function () {
      let movieId = this.$route.query.movieId
      return +movieId
    },
    curSelectCinemaId: function () {
      return this.cinemas[this.curSelectCinema].id
    }
  },
  methods: {
    selectCinemaItem (index) {
      this.curSelectCinema = index
    }
  },
  created: function () {
    for (let item of this.$store.state.movies) {
      let movieId = this.$route.query.movieId
      if (Number(item.id) === Number(movieId)) {
        this.bufferedMovieInfo = item
      }
    }
  }
}
</script>

<style scoped>
.cinema-info {
  margin-left: 10px;
}
.cinema-info__title {
  margin-left: 20px;
  padding: 20px 0;
  font-size: 24px;
}
</style>
