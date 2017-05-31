<template>
  <div class="basic-info">
    <el-row>
      <el-col :span="8">
        <img class="basic-info__main-poster" :src="movieInfo.imageUrl" />
      </el-col>
      <el-col :span="8">
        <div class="basic-info__title">摔跤吧！爸爸</div>
        <div>Dangal</div>
        <div>印度 / 140分钟</div>
        <div>2017-05-05大陆上映</div>
        <!-- <el-row v-for="(value, key) in movieInfo" :key="key">
          <span class="basic-info__title"
            v-if="key === 'title'">{{ value }}</span>
          <span class="basic-info__detail"
            v-else-if="['genres'].indexOf(key) != -1">{{ value }}</span>
        </el-row> -->
        <div>
          <el-button>想看</el-button>
          <el-button>评分</el-button>
        </div>
        <el-button type="primary">立即购票</el-button>
      </el-col>
    </el-row>
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

.basic-info__title {
  font-weight: bold;
  font-size: 26px;
}

.basic-info__detail {

}
</style>
