<!-- home page -->
<template>
  <div class="home-rank">
    <div>
      <div class="home-rank__title">排行榜</div>
      <el-row class="home-rank__item"
        v-for="item in rankInfo" :key="item.rank">
        <el-col class="home-rank__rank" :span="2">{{ item.rank }}</el-col>
        <el-col class="home-rank__name" :span="14">{{ item.name }}</el-col>
        <el-col class="home-rank__hint" :span="8">{{ item.hint }}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-rank',
  data () {
    return {
      rankInfo: [{
        rank: 1,
        name: '加勒比海盗',
        hint: '4096人想看'
      }, {
        rank: 2,
        name: '摔跤吧，爸爸',
        hint: '2048人想看'
      }]
    }
  }
}
</script>

<style scoped>
.home-rank {
  margin-left: 10px;
}

.home-rank__title{
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.home-rank__item {
  text-align: left;
  font-size: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: pointer;
}

.home-rank__item:hover {
  background-color: rgba(238, 241, 246, 1.00);
}

.home-rank__rank {
  font-weight: bold;
}

.home-rank__name {

}

.home-rank__hint {
  color: #CCCCCC;
}
</style>
