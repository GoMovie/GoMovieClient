<template>
  <div class="cinema-info">
    <el-row>
      <el-breadcrumb class="cinema-info__title">
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
      film: '加勒比海盗5：死无对证',
      cinemas: [{
        'id': 1,
        'cityId': '020',
        'name': '金逸珠江国际影城（大学城店）',
        'introduction': '2D、3D、4D电影一应俱全。',
        'address': '番禺区小谷围街贝岗中二横路1号GOGO新天地商业广场B2B001铺',
        'phone': '020-25830163',
        'score': 3.0,
        'longitude': 113.39204391090281,
        'latitude': 23.10196456776333
      }]
    }
  },
  components: {
    'cinema-item': require('../components/cinema-info/cinema-item'),
    'choose-room': require('../components/cinema-info/choose-room')
  },
  computed: {
    movieTitle: function () {
      return this.bufferedMovieInfo.title
    },
    goBackPath: function () {
      let curId = this.$route.query.movieId
      return `/movie-info?movieId=${curId}`
    },
    curMovieId: function () {
      let movieId = this.$route.query.movieId
      return movieId
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
    for (let item of this.$store.state.movieBuff) {
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
