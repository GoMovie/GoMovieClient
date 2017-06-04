<template>
  <div class="confirm-item">
    <img class="confirm-item__image" :src="orderInfo.movie.imageUrl" />
    <div class="confirm-item__order-info">
      <div class="confirm-item__title">{{orderInfo.movie.name}}</div>
      <div class="confirm-item__detail confirm-item__cinema">
        {{orderInfo.cinema.name}}
      </div>
      <div class="confirm-item__detail confirm-item__time">
        时间：{{getTimeStr(orderInfo.screening.startTime)}} {{getDateStr(orderInfo.screening.startTime)}}
      </div>
      <div class="confirm-item__detail confirm-item__room">
        影厅：{{orderInfo.screening.name}}
      </div>
      <div class="confirm-item__detail confirm-item__seat">
        座位：{{orderInfo.seat.row}}排 {{orderInfo.seat.col}}座
      </div>
    </div>
    <div class="confirm-item__divider"></div>
  </div>
</template>

<script>
import { getTimeStr, getDateStr } from '@/lib/util.js'

export default {
  name: 'confirm-item',
  props: ['orderInfo'],
  data () {
    return {
    }
  },
  methods: {
    getTimeStr,
    getDateStr
  }
}
</script>

<style scoped>
.confirm-item {
  width: 900px;
  margin: 10px 20px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px #ddd;
  overflow: hidden;
}
.confirm-item__image {
  width: 180px;
  height: 240px;
  float: left;
}
.confirm-item__order-info {
  text-align: left;
  margin: 40px 30px;
  float: left;
}
.confirm-item__title {
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 20px 0;
}
.confirm-item__detail {
  margin: 5px 0;
  font-size: 14px;
}
.confirm-item__divider {
  margin-right: 200px;
  float: right;
  overflow: hidden;
  background: url(http://static5.gewara.com/css/movie_wide/line_ticket.jpg) 0 0 no-repeat;
  width: 9px;
  height: 242px;
  z-index: 5;
  box-shadow: 0 1px 2px #fff;
}
</style>
