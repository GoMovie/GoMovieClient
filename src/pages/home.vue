<!-- home page -->
<template>
  <div class="home">
    <top-bar></top-bar>
    <div class="home-carousel-container">
      <el-carousel
        trigger="click" height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="home-left" >
           全部电影
          <el-pagination class="home-pages"
            layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </el-col>
      <el-col :span="8">
         <div class="home-right">
           排行榜
         </div>
      </el-col>
    </el-row>
    <h1 class="test-text">{{ msg }}</h1>
  </div>
</template>

<script>
import TopBar from '../components/top-bar'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello Vue, this is home page'
    }
  },
  components: {
    'top-bar': TopBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.home-left {
  height: 300px;
  background-color:  #99a9bf;
}

.home-right {
  height: 300px;
  background-color:  #d3dce6;
}

.home-pages {
  position: absolute;
  bottom: 10px;
}

.home-carousel-container {
  margin-bottom: 15px;
}

/* define carousel items */
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
