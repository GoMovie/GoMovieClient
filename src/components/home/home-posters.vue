<template>
  <div class="home-posters">
    <div class="home-posters__title">全部电影 ({{ posterData.length }}部)</div>
    <div class="home-posters__container">
      <div class="home-posters__poster-container"
        v-for="(poster, index) in posterData" :key="poster.id">
        <div class="home-posters__poster" @click="onPosterClick (index)">
          <img class="home-posters__img" :src="poster.imageUrl"/>
          <div class="home-posters__overlay">
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
    }
  },
  methods: {
    onPosterClick (index) {
      this.$store.commit('updateMenuFocus', false)
      // this.$store.commit('updateMenuFocus', true)
      this.$router.push(`/movie-info?movieId=${this.posterData[index].id}`)
      this.$root.$children[0].$refs.topBar.inactive()
    }
  },
  computed: {
    posterData () {
      return this.$store.state.movieBuff
    }
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
  padding: 0 20px 30px;
}

.home-posters__poster {
  position: relative;
  height: 220px;
  cursor: pointer;
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
