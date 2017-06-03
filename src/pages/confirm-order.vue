<template>
  <div class="confirm-order">
    <el-breadcrumb class="confirm-order__title">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="pathToMovieInfo">
        {{limitStrLen(movieInfo.title, 4)}}
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="pathToCinemaInfo">
        {{limitStrLen(cinemaInfo.name, 4)}}
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="pathToChooseSeat">选择座位</el-breadcrumb-item>
      <el-breadcrumb-item>确认订单</el-breadcrumb-item>
    </el-breadcrumb>
    <confirm-item :orderInfo="orderInfo"></confirm-item>
    <el-button class="confirm-order__confirm-btn" type="primary" size="large" icon="check"
      @click="onConfirm">去支付</el-button>
    <el-button class="confirm-order__cancel-btn" size="large" icon="close"
      @click="onCancel">取消订单</el-button>
  </div>
</template>

<script>
import { limitStrLen } from '@/lib/util.js'

export default {
  name: 'confirm-order',
  data () {
    return {
      movieInfo: {},
      cinemaInfo: {},
      screeningInfo: {},
      orderInfo: {}
    }
  },
  computed: {
    pathToMovieInfo: function () {
      let {movieId} = this.$route.query
      return `/movie-info?movieId=${movieId}`
    },
    pathToCinemaInfo: function () {
      let {movieId, cinemaId} = this.$route.query
      return `/cinema-info?movieId=${movieId}&cinemaId=${cinemaId}`
    },
    pathToChooseSeat: function () {
      let {movieId, cinemaId, screeningId} = this.$route.query
      return `/seat-info?movieId=${movieId}&cinemaId=${cinemaId}&screeningId=${screeningId}`
    }
  },
  components: {
    'confirm-item': require('../components/confirm-order/confirm-item.vue')
  },
  methods: {
    limitStrLen,
    onConfirm: function () {
      console.log('confirm')
    },
    onCancel: function () {
    },
    generateOrderInfo: function (movieId, cinemaId, screeningId, row, col) {
      this.orderInfo = {
        user: {
          //  TODO replace
          username: 'hhk',
          password: 'hhkb'
        },
        movie: {
          id: movieId,
          name: this.movieInfo.title,
          imageUrl: this.movieInfo.imageUrl
        },
        cinema: {
          id: cinemaId,
          name: this.cinemaInfo.name
        },
        screening: {
          id: screeningId,
          name: this.screeningInfo.hall.name,
          startTime: this.screeningInfo.startTime,
          runningTime: this.screeningInfo.runningTime
        },
        seat: {
          row,
          col
        }
      }
    }
  },
  created: function () {
    let {movieId, cinemaId, screeningId, row, col} = this.$route.query
    this.movieInfo = this.$store.state.movies.filter((movie) => +movieId === movie.id)[0]
    this.cinemaInfo = this.$store.state.cinemas.filter((cinema) => +cinemaId === cinema.id)[0]
    this.screeningInfo = this.$store.state.screenings.filter((screening) => +screeningId === screening.id)[0]
    this.generateOrderInfo(movieId, cinemaId, screeningId, row, col)
  }
}
</script>

<style scoped>
.confirm-order__title {
  margin-left: 20px;
  padding: 20px 0;
  font-size: 24px;
}
.confirm-order__confirm-btn, .confirm-order__cancel-btn {
  float: left;
  margin: 10px -10px 0 20px;
}
</style>
