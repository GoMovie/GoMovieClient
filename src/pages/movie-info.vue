<template>
  <div class="movie-info">
    <div class="movie-info__up-part">
      <basic-info :movieId="movieId"></basic-info>
    </div>
    <div class="movie-info__bottom-part">
      <div class="movie-info__des-title">电影简介</div>
      <hr />
      <div class="movie-info__description">{{ movieDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-info',
  data () {
    return {
      msg: 'Movie Info',
      movieId: -1,
      movieDescription: '这是一个温暖幽默的励志故事。马哈维亚 辛格·珀尕（阿米尔汗 饰）' +
        '曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想：' +
        '赢得世界级金牌。结果生了四个女儿。' +
        '本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，' +
        '看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生，' +
        '再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：' +
        '换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，' +
        '最终赢来了成为榜样激励千千万万女性的机会......'
    }
  },
  components: {
    'top-bar': require('../components/top-bar'),
    'basic-info': require('../components/movie-info/basic-info')
  },
  created () {
    this.movieId = this.$route.query.movieId
  }
}
</script>

<style scoped>
.movie-info__up-part {
  margin-top: 120px;
  margin-bottom: 40px;
}

.movie-info {
  text-align: left;
  width: 70%;
  margin: 0 auto;
}

.movie-info__des-title {
  font-weight: bold;
  font-size: 24px;
  color: RGBA(223, 45, 45, 1.00);
  margin-top: 20px;
  margin-bottom: 5px;
}
</style>
