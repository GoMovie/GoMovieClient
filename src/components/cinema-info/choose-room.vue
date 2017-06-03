<template>
  <div class="choose-room">
    <el-row class="choose-room__date-select">
      <el-date-picker
        v-model="dateValue"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-row>
    <div class="choose-room__select-room">
      <el-row class="choose-room__header">
        <el-col :span="6"><div>放映时间</div></el-col>
        <el-col :span="4"><div>票价</div></el-col>
        <el-col :span="7"><div>放映厅</div></el-col>
        <el-col :span="7"><div>选座购票</div></el-col>
      </el-row>
      <el-row class="choose-room__screen-item"
        v-for="item in screenData" :key="item.id">
        <el-col :span="6">
          <div class="choose-room__item-time">{{getTimeStr(item.startTime)}}</div>
        </el-col>
        <el-col :span="4"><div>¥35</div></el-col>
        <el-col :span="7"><div>{{item.hall.name}}</div></el-col>
        <el-col :span="7"><el-button type="primary"
          @click="goSeatInfo(item.id)">选座购票</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getTimeStr } from '@/lib/util.js'

export default {
  name: 'choose-room',
  props: ['movieId', 'cinemaId'],
  data () {
    return {
      dateValue: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      }
    }
  },
  computed: {
    screenData: function () {
      let screenings = this.$store.state.screenings
      return screenings.filter((screen) => screen.movie.id === this.movieId)
    }
  },
  methods: {
    getTimeStr,
    goSeatInfo: function (screeningId) {
      //  movieId, cinemaId, screenings
      let urlStr = `/seat-info?movieId=${this.movieId}&cinemaId=${this.cinemaId}&screeningId=${screeningId}`
      this.$router.push(urlStr)
    }
  }
}
</script>

<style scoped>
.choose-room {
  margin: 0 20px 20px 10px;
}

.choose-room__date-select {
  text-align: left;
  margin: 0 0px 10px;
}

.choose-room__select-room {
  border: 0.5px solid RGBA(204, 204, 204, 1.00);
}

.choose-room__header {
  font-size: 14px;
  padding: 10px 20px;
  background-color: RGBA(223, 223, 223, 1.00)
}

.choose-room__item-time {
  font-weight: bold;
}

.choose-room__screen-item {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 0.5px solid RGBA(204, 204, 204, 1.00);
}
</style>
