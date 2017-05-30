<!-- home page -->
<template>
  <div class="home">
    <div class="home-carousel-container">
      <el-carousel
        trigger="click" height="400px">
        <el-carousel-item v-for="item in carouselData" :key="item.id">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row :gutter="20">
      <el-col :span="16">
        <home-posters></home-posters>
      </el-col>
      <el-col :span="8">
         <home-rank></home-rank>
      </el-col>
    </el-row>
    <h1 class="test-text">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello Vue, this is home page',
      carouselData: [
        {
          id: 1,
          src: 'http://p0.meituan.net/mmc/cebe963a68101c1fed923b120311625e140541.jpg'
        }, {
          id: 2,
          src: 'http://p0.meituan.net/mmc/41e1094c62f8eaf1f85dec684c9945da146696.jpg'
        }, {
          id: 3,
          src: 'http://p1.meituan.net/mmc/3240add10264fdb0b4bee9e0d12a5f26152982.jpg'
        }
      ]
    }
  },
  components: {
    'home-posters': require('../components/home/home-posters'),
    'home-rank': require('../components/home/home-rank')
  },
  mounted: async function () {
    // TODO buffer movie info data from the server
    // let {} = await this.$http.get('/movies')
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
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 400px;
  margin: 0;
}
</style>
