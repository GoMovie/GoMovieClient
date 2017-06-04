<template>
  <div class="seat-info">
    <el-row>
      <el-breadcrumb class="seat-info__title">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="pathToMovieInfo">
          {{limitStrLen(movieInfo.title, 4)}}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="pathToCinemaInfo">
          {{limitStrLen(cinemaInfo.name, 4)}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>选择座位</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="seat-info__screen">银幕</div>
        <div class="seat-info__map-container" :style="containerStyle">
          <dl class="seat-info__seat-row" v-for="row in seatRowNum">
            <dd v-for="col in seatColNum">
              <div class="seat-info__seat-item"
                :class="{ 'seat-info__seat-item-show': seats[row - 1][col - 1].isEnable,
                          'seat-info__seat-item-selected': selectedSeat && row - 1 === selectedSeat.row && col - 1 === selectedSeat.col }"
                @click="onSeatClick (row-1, col-1)">
              </div>
            </dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="seat-info__user-info">
          <div class="seat-info__order-info seat-info__order-title">
            {{this.movieInfo.title}}
          </div>
          <div class="seat-info__order-info">影院：{{cinemaInfo.name}}</div>
          <div class="seat-info__order-info">影厅：{{screeningInfo.hall.name}}</div>
          <div class="seat-info__order-info">场次：09:30:00</div>
          <div class="seat-info__order-info" v-if="!selectedSeat">座位：您还没有选择座位</div>
          <div class="seat-info__order-info" v-else>座位：{{selectedSeat.row + 1}}行{{selectedSeat.col + 1}}列</div>
          <el-button class="seat-info__order-info" disabled
            v-if="selectedSeat === null">您还未选座位</el-button>
          <el-button class="seat-info__order-info" type="primary" @click="onClickConfirm"
            v-else>确认选座</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { limitStrLen } from '@/lib/util.js'

export default {
  name: 'seat-info',
  computed: {
    pathToMovieInfo: function () {
      let {movieId} = this.$route.query
      return `/movie-info?movieId=${movieId}`
    },
    pathToCinemaInfo: function () {
      let {movieId, cinemaId} = this.$route.query
      return `/cinema-info?movieId=${movieId}&cinemaId=${cinemaId}`
    }
  },
  data () {
    return {
      containerStyle: {},
      movieInfo: {},
      cinemaInfo: {},
      screeningInfo: {},
      seats: [],
      seatRowNum: 0,
      seatColNum: 0,
      selectedSeat: null
    }
  },
  methods: {
    limitStrLen,
    initSeatMap: function (seatData) {
      let { maxRow, maxCol } = seatData.reduce((max, item) => {
        return {
          maxRow: Math.max(max.maxRow, item.row),
          maxCol: Math.max(max.maxCol, item.col)
        }
      }, {maxRow: 0, maxCol: 0})
      this.seatRowNum = maxRow + 1
      this.seatColNum = maxCol + 1
      for (let i = 0; i <= maxRow; ++i) {
        let row = []
        for (let j = 0; j <= maxCol; ++j) {
          row.push({isEnable: false})
        }
        this.seats.push(row)
      }
      for (let item of seatData) {
        this.seats[item.row][item.col].isEnable = true
      }
    },
    onSeatClick: function (row, col) {
      let seat = this.seats[row][col]
      if (!seat.isEnable) {
        return
      }
      if (!this.selectedSeat || this.selectedSeat.row !== row || this.selectedSeat.col !== col) {
        this.selectedSeat = {row, col}
      } else {
        this.selectedSeat = null
      }
    },
    onClickConfirm: function () {
      if (this.selectedSeat === null) {
        //  alert
        this.$notify.error({
          title: '错误',
          message: '您还没有选择座位'
        })
        return
      }
      let {movieId, cinemaId, screeningId} = this.$route.query
      let preInfo = `movieId=${movieId}&cinemaId=${cinemaId}&screeningId=${screeningId}`
      let seatInfo = `row=${this.selectedSeat.row + 1}&col=${this.selectedSeat.col + 1}`
      this.$router.push(`/confirm-order?${preInfo}&${seatInfo}`)
    },
    getSeatData: async function () {
      let { cinemaId, screeningId } = this.$route.query
      let hallId = this.$store.state.screenings.filter((screening) => +screeningId === screening.id)[0].hall.id
      let { data } = await this.$http.get(`/cinemas/${cinemaId}/halls/${hallId}/seats`)
      this.initSeatMap(data)
    }
  },
  created: async function () {
    let { movieId, cinemaId, screeningId } = this.$route.query
    this.movieInfo = this.$store.state.movies.filter((movie) => +movieId === movie.id)[0]
    this.cinemaInfo = this.$store.state.cinemas.filter((cinema) => +cinemaId === cinema.id)[0]
    this.screeningInfo = this.$store.state.screenings.filter((screening) => +screeningId === screening.id)[0]
    await this.getSeatData()
    this.containerStyle = {
      width: this.seatColNum * 35 + 'px'
    }
  }
}
</script>

<style scoped>
.seat-info__title {
  margin-left: 20px;
  padding: 20px 0;
  font-size: 24px;
}
.seat-info__screen {
  height: 35px;
  text-align: center;
  background: url(http://static5.gewara.com/css/movie_wide/bg_screen.gif) center 0 no-repeat;
  line-height: 29px;
  font-size: 14px;
  margin: 10px auto 0 auto;
}
.seat-info__map-container {
  margin: 5px auto 0;
}
.seat-info__seat-row {
  clear: both;
}
.seat-info__seat-item {
  width: 30px;
  height: 26px;
  line-height: 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  float: left;
}
.seat-info__seat-item-show {
  background-position: 4px 4px;
  cursor: pointer;
  background: url(http://static5.gewara.com/css/movie_wide/ico_seat.gif?v=2017053117) no-repeat;
}
.seat-info__seat-item-selected {
  background-position: 0 -58px;
  cursor: pointer;
  /*background: url(http://static5.gewara.com/css/movie_wide/ico_seat.gif?v=2017053117) no-repeat;*/
}
.seat-info__user-info {
  text-align: left;
  margin: 0 20px 0 0;
  height: 500px;
  /*background-color: RGBA(255, 250, 244, 1.00);*/
}
.seat-info__order-info {
  margin: 10px;
}
.seat-info__order-title {
  font-size: 22px;
  font-weight: bold;
}
</style>
