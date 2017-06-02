<template>
  <div class="seat-info">
    <el-row>
      <el-breadcrumb class="seat-info__title">
        <el-breadcrumb-item :to="pathToMovieInfo">
          {{this.bufferedMovieInfo.title}}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="pathToCinemaInfo">
          金逸影院
        </el-breadcrumb-item>
        <el-breadcrumb-item>选择座位</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="seat-info__screen">银幕</div>
        <div class="seat-info__map-container" :style="ContainerStyle">
          <dl class="seat-info__seat-row" v-for="row in seatRowNum">
            <dd v-for="col in seatColNum">
              <div class="seat-info__seat-item"
                :class="{ 'seat-info__seat-item-show': seatMap[row-1][col-1].isEnable,
                          'seat-info__seat-item-selected': seatMap[row-1][col-1].isSelected }"
                @click="onSeatClick (row-1, col-1)">
              </div>
            </dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="seat-info__user-info">
          <div class="seat-info__order-info seat-info__order-title">
            {{this.bufferedMovieInfo.title}}
          </div>
          <div class="seat-info__order-info">影院：</div>
          <div class="seat-info__order-info">影厅：</div>
          <div class="seat-info__order-info">场次：</div>
          <div class="seat-info__order-info">座位：您还没有选择座位</div>
          <el-button class="seat-info__order-info" type="primary">确认选座</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//  TODO replaced by data from the server
import seatData from '../components/seat-info/seat-buff'

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
      ContainerStyle: {},
      bufferedMovieInfo: {},
      bufferedCinemaInfo: {},
      seatMap: [],
      seatRowNum: 0,
      seatColNum: 0
    }
  },
  methods: {
    initSeatMap: function () {
      let {maxRow, maxCol} = seatData.reduce((max, item) => {
        return {
          maxRow: Math.max(max.maxRow, item.row),
          maxCol: Math.max(max.maxCol, item.col)
        }
      }, {maxRow: 0, maxCol: 0})
      // console.log(maxRow, maxCol)
      this.seatRowNum = maxRow + 1
      this.seatColNum = maxCol + 1
      for (let i = 0; i <= maxRow; ++i) {
        let row = []
        for (let j = 0; j <= maxCol; ++j) {
          row.push({isEnable: false, isSelected: false})
        }
        this.seatMap.push(row)
      }
      for (let item of seatData) {
        this.seatMap[item.row][item.col].isEnable = true
      }
    },
    onSeatClick: function (row, col) {
      console.log(`row=${row} col=${col}`)
      let seat = this.seatMap[row][col]
      // console.log(seat)
      if (!seat.isEnable) {
        return
      }
      seat.isSelected = !seat.isSelected
    }
  },
  created: function () {
    this.initSeatMap()
    for (let item of this.$store.state.movieBuff) {
      let movieId = this.$route.query.movieId
      if (Number(item.id) === Number(movieId)) {
        this.bufferedMovieInfo = item
        break
      }
    }
    this.ContainerStyle = {
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
