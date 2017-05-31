<template>
  <div class="basic-info">
    <img class="basic-info__main-poster" :src="movieInfo.imageUrl" />
    <div class="basic-info__container">
      <div class="basic-info__title">摔跤吧！爸爸</div>
      <div class="basic-info__title-en">Dangal</div>
      <div class="basic-info__detail">印度 / 140分钟</div>
      <div class="basic-info__detail">2017-05-05 大陆上映</div>
      <div class="basic-info__detail">评分：9.7</div>
      <el-button class="basic-info__buy-btn"
        @click="onBuyTicket"
        type="primary">立即购票</el-button>

    </div>
    <!-- <el-row v-for="(value, key) in movieInfo" :key="key">
      <span class="basic-info__title"
        v-if="key === 'title'">{{ value }}</span>
      <span class="basic-info__detail"
        v-else-if="['genres'].indexOf(key) != -1">{{ value }}</span>
    </el-row> -->
  </div>
</template>

<script>
export default {
  name: 'basic-info',
  props: ['movieIndex'],
  data () {
    return {
      movieInfo: {}
    }
  },
  methods: {
    onBuyTicket () {
      this.$router.push(`/cinema-info?movieIndex=${this.movieIndex}`)
    }
  },
  created () {
    this.movieInfo = this.$store.state.movieBuff[this.movieIndex]
    //  TODO get movie detail from the server
  }
}
</script>

<style scoped>
.basic-info {
  text-align: left;
}

.basic-info__main-poster {
  width: 240px;
  height: 330px;
}

.basic-info__container {
  margin-right: 35%;
  float: right;
}

.basic-info__title {
  font-weight: bold;
  font-size: 26px;
}

.basic-info__title-en {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 7px;
}

.basic-info__detail {
  margin-bottom: 5px;
}

.basic-info__want-btn, .basic-info__rate-btn {
  width: 130px;
}

.basic-info__buy-btn {
  width: 275px;
  margin-top: 40px;
}
</style>
