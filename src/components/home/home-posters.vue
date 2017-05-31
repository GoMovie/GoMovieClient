<template>
  <div class="home-posters">
    <div class="home-posters__title">全部电影 ({{ posterData.length }}部)</div>
    <div class="home-posters__container">
      <div class="home-posters__poster-container" v-for="poster in posterData" :key="poster.id">
        <div class="home-posters__poster" @click.native="onPosterClick">
          <img class="home-posters__img" :src="poster.imageUrl"/><div class="home-posters__overlay">
            <span class="home-posters__movie-title">{{poster.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-posters',
  data () {
    return {
      posterData: []
    }
  },
  methods: {
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
    this.posterData = rawData
  }
}
</script>

<style scoped>

.home-posters {
  margin: 0 50px;
}

.home-posters__container {
  display: flex;
  flex-wrap: wrap;
}

.home-posters__poster-container {
  box-sizing: border-box;
  width: 25%;
  max-width: 25%;
  flex: auto;
  cursor: pointer;
  padding: 0 20px 30px;
}

.home-posters__poster {
  position: relative;
  height: 220px;
}

.home-posters__overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAMAAACpg44GAAAAbFBMVEUiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiK2HsfSAAAAJHRSTlPMxr63q6OahzclHRULBgHCsZOOf3p1cGtmYVxXUk1IQz4wLBAszz8hAAAAhklEQVRo3u3OxY0DAAADsBxDmZn337FTVPIjnsAZ4/zgCOcHhzg/+MBlgPOD/zg/+Ifzg3dcbrj84vzgFZcLLmdcTrgccTngssdlh8sWlw0ua1xWuCxxWeDyg/ODc1xmuHzj/OAXzg9+4vzgFJcPnB98x/nBCS5vOD9YVVVVVVVVVVVVr/IEUdzLcLhtP2AAAAAASUVORK5CYII=) repeat-x bottom;
}

.home-posters__title {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 20px;
}

.home-posters__img {
  width: 100%;
  height: 220px;
}

.home-posters__movie-title {
  text-align: left;
  font-size: 16px;
  line-height: 22px;
  width: calc(100% - 20px);
  color: #ffffff;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>
