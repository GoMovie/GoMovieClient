<template>
  <div class="cinema-item">
    <el-row>
      <el-col :span="18" class="cinema-item__info">
        <div class="cinema-item__row">
          <span class="cinema-item__name">{{cinema.name}}</span>
          <el-rate v-model="cinema.score" disabled show-text text-color="#ff9900" text-template="{value}" class="cinema-item__score"></el-rate>
        </div>
        <div class="cinema-item__row">地址：{{cinema.location}}</div>
        <div class="cinema-item__row">影讯：<span v-for="time in cinema.times">{{time}} | </span></div>
      </el-col>
      <el-col :span="2" class="cinema-item__price-col">
        <span class="cinema-item__price">¥{{cinema.price}}起</span>
      </el-col>
      <el-col :span="4" class="cinema-item__button-col">
        <el-button type="primary" @click="goSeatInfo">选座购票</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'cinema-item',
  props: ['cinema'],
  data () {
    return {
    }
  },
  methods: {
    goSeatInfo: function () {
      this.$router.push('/seat-info')
    }
  }
}
</script>

<style scoped>
.cinema-item {
  height: 88px;
  margin: 0 20px 20px;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
}
.cinema-item__info {
  text-align: left;
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
