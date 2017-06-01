<template>
  <div class="cinema-info">
    <el-row>
      <el-breadcrumb class="cinema-info__title">
        <el-breadcrumb-item to="/">{{movieTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>选择电影院</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="11" class="cinema-info__choose-cinema">
        <cinema-item v-for="(cinema, index) in cinemas"
          :cinema="cinema"
          :select="index === curSelectCinema"
          :key="cinema.name"
          @click.native="selectCinemaItem(index)">
        </cinema-item>
      </el-col>
      <el-col :span="13">
        <choose-room></choose-room>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'cinema-info',
  data () {
    return {
      film: '加勒比海盗5：死无对证',
      curSelectCinema: 0,
      cinemas: [{
        name: '1978电影城',
        score: 3.0,
        location: '增城区增江街沿江东三路15号1978创意园B区1号',
        times: ['22:25'],
        price: 33
      }, {
        name: 'CGV星聚汇影城(永旺店)',
        score: 4.8,
        location: '番禺区亚运大道1号永旺梦乐城4F',
        times: ['22:50'],
        price: 37
      }, {
        name: 'IDC国际影城(白云尚城店)',
        score: 5.0,
        location: '白云区尚景街1号白云尚城文化活动中心',
        times: ['22:05', '22:35', '23:05'],
        price: 42
      }, {
        name: 'SFC上影影城(海珠燕汇店) ',
        score: 4.6,
        location: '海珠区江燕路108号燕汇广场4楼',
        times: ['21:50', '22:45'],
        price: 34
      }]
    }
  },
  components: {
    'cinema-item': require('../components/cinema-info/cinema-item'),
    'choose-room': require('../components/cinema-info/choose-room')
  },
  computed: {
    movieTitle: function () {
      let index = this.$route.query.movieIndex
      return this.$store.state.movieBuff[index].title
    }
  },
  methods: {
    selectCinemaItem (index) {
      this.curSelectCinema = index
    }
  }
}
</script>

<style scoped>
.cinema-info {
  /*width: 60%;*/
  margin-left: 10px;
}
.cinema-info__title {
  margin-left: 20px;
  padding: 20px 0;
  font-size: 24px;
}
</style>
