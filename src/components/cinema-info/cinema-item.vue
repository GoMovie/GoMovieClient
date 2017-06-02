<template>
  <div class="cinema-item" :class="addClass">
    <div class="cinema-item__row">
      <span class="cinema-item__name">{{fixedCinema.name}}</span>
      <el-rate v-model="fixedCinema.score" disabled show-text text-color="#ff9900"
        :text-template="rateTemplate" class="cinema-item__score"></el-rate>
    </div>
    <div class="cinema-item__row">简介：{{fixedCinema.introduction}}</div>
    <div class="cinema-item__row">地址：{{fixedCinema.address}}</div>
  </div>
</template>

<script>

export default {
  name: 'cinema-item',
  props: ['cinema', 'select'],
  data () {
    return {}
  },
  computed: {
    fixedCinema () {
      let newCinema = Object.assign({}, this.cinema)
      newCinema.score = +newCinema.score.toFixed(1)
      return newCinema
    },
    rateTemplate () {
      let score = this.cinema.score
      return Number.isInteger(score) ? '{value}.0' : '{value}'
    },
    addClass () {
      return this.select ? 'cinema-item-selected' : ''
    }
  }
}
</script>

<style scoped>
.cinema-item {
  height: 88px;
  margin: 0 20px 20px;
  padding: 10px 20px;
  border: 1px solid RGBA(0, 0, 0, 0.2);
  font-size: 14px;
  cursor: pointer;
  text-align: left;
}
.cinema-item-selected {
  background-color: RGBA(32, 160, 255, 1.00);
  color: RGBA(255, 255, 255, 1);
}
.cinema-item:hover {
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
}
.cinema-item__row {
  padding: 5px;
}
.cinema-item__name {
  font-size: 18px;
  line-height: 18px;
  margin-right: 10px;
}
.cinema-item__score {
  display: inline-block;
  vertical-align: bottom;
}
.cinema-item__price-col, .cinema-item__button-col {
  height: 88px;
  line-height: 88px;
}
</style>
