<template>
  <div class="basic-info">
    <img class="basic-info__main-poster" :src="movieInfo.imageUrl" />
    <div class="basic-info__container">
      <div class="basic-info__title">{{movieInfo.title}}</div>
      <!-- <div class="basic-info__title-en">{{movieInfo.originalTitle}}</div> -->
      <div class="basic-info__genres">类型：{{movieInfo.genres}}</div>
      <div class="basic-info__detail" v-if="movieInfo.onShow">评分：{{movieInfo.rating}}</div>
      <el-button class="basic-info__buy-btn"
        @click="onBuyTicket"
        type="primary">立即购票</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-info',
  props: ['movieId'],
  data () {
    return {
      movieInfo: {}
    }
  },
  methods: {
    onBuyTicket () {
      this.$router.push(`/cinema-info?movieId=${this.movieId}`)
    }
  },
  created () {
    for (let item of this.$store.state.movieBuff) {
      if (Number(item.id) === Number(this.movieId)) {
        this.movieInfo = item
        break
      }
    }
    // this.movieInfo = this.$store.state.movieBuff[this.movieIndex]
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
  width: 35%;
  margin-right: 35%;
  float: right;
}

.basic-info__title {
  font-weight: bold;
  font-size: 26px;
}

.basic-info__genres {
  margin-top: 20px;
  margin-bottom: 3px;
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
