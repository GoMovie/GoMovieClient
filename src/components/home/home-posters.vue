<template>
  <div class="home-posters">
    <el-row class="home-posters__group">
      <div class="home-posters__title">全部电影 ({{ movieNum }}部)</div>
    </el-row>
    <el-row class="home-posters__group" :gutter="15"
      v-for="(row, key) in posterData" :key="key">
      <el-col class="home-posters__ele"
        :span="6"
        v-for="ele in row" :key="ele.id"
        v-show="ele.id > 0"
        @click.native="onPosterClick">
        <img class="home-posters__img"
          :src="ele.imageUrl" />
        <div class="home-posters__movie-title">
          {{ ele.title }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home-posters',
  data () {
    return {
      movieNum: 20,
      posterData: [[]]
    }
  },
  methods: {
    //  convert plain data to structured posterData
    handlePosterData (rawData) {
      let handledData = []
      let handledDataRow = []
      let counter = 0
      for (let ele of rawData) {
        counter += 1
        handledDataRow.push(ele)
        if (counter % 4 === 0) {
          handledData.push(handledDataRow)
          handledDataRow = []
        }
      }
      let curRowLen = handledDataRow.length
      if (curRowLen > 0) {
        for (let i = 0; i < 4 - curRowLen % 4; ++i) {
          handledDataRow.push({
            id: -1 - i,  // mark empty
            imageUrl: ''
          })
        }
        handledData.push(handledDataRow)
      }
      return handledData
    },
    onPosterClick () {
      this.$router.push('/movie-info')
    }
  },
  created: function () {
    //  get rawdata from server
    let rawData = [
      {
        'id': 6311303,
        'title': '加勒比海盗5：死无对证',
        'originalTitle': 'Pirates of the Caribbean: Dead Men Tell No Tales',
        'rating': 0,
        'genres': '动作,奇幻,冒险',
        'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2459723975.jpg',
        'onShow': true
      }, {
        'id': 27003544,
        'title': '黑白照相馆',
        'originalTitle': '黑白照相馆',
        'rating': 0,
        'genres': '喜剧',
        'imageUrl': 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460165218.jpg',
        'onShow': true
      }, {
        'id': 27038491,
        'title': '诡异酒楼',
        'originalTitle': '诡异酒楼',
        'rating': 0,
        'genres': '惊悚',
        'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2460012780.jpg',
        'onShow': true
      }, {
        'id': 26387939,
        'title': '摔跤吧！爸爸',
        'originalTitle': 'Dangal',
        'rating': 9.2,
        'genres': '剧情,传记,运动',
        'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.jpg',
        'onShow': true
      }, {
        'id': 26718838,
        'title': '异星觉醒',
        'originalTitle': 'Life',
        'rating': 6.7,
        'genres': '科幻,惊悚,恐怖',
        'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2456571580.jpg',
        'onShow': true
      }, {
        'id': 25937854,
        'title': '银河护卫队2',
        'originalTitle': 'Guardians of the Galaxy Vol. 2',
        'rating': 8.2,
        'genres': '动作,科幻,冒险',
        'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2455261804.jpg',
        'onShow': true
      }
    ]
    this.posterData = this.handlePosterData(rawData)
    // console.log(this.posterData)
  }
}
</script>

<style scoped>
.home-posters__ele {
  cursor: pointer;
}

.home-posters {
  margin-left: 10px;
}

.home-posters__title {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
}

.home-posters__group {
  margin-bottom: 20px;
}

.home-posters__img {
  width: 160px;
  height: 220px;
}

.home-posters__movie-title {
  font-weight: bold;
  color: RGBA(0, 0, 0, 0.3);
  margin: -6px auto auto auto;
  width: 140px;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.home-posters__pages {
  /*text-align: right;*/
}
</style>
