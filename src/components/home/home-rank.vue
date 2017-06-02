<!-- home page -->
<template>
  <div class="home-rank">
    <div>
      <div class="home-rank__title">今日票房排行榜</div>
      <el-row class="home-rank__item"
        v-for="(item, index) in rankInfo" :key="index">
        <el-col class="home-rank__rank" :span="2">{{ index + 1 }}</el-col>
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
        name: '加勒比海盗5：死无对证',
        hint: '754.00万'
      }, {
        name: '摔跤吧！爸爸',
        hint: '198.94万'
      }, {
        name: '神奇女侠',
        hint: '173.81万'
      }, {
        name: '哆啦A梦：大雄的南极冰冰凉大冒险',
        hint: '160.36万'
      }, {
        name: '荡寇风云',
        hint: '59.01万'
      }, {
        name: '“吃吃”的爱',
        hint: '41.36万'
      }, {
        name: '临时演员',
        hint: '19.63'
      }, {
        name: '夏天19岁的肖像',
        hint: '17.31万'
      }, {
        name: '异星觉醒',
        hint: '17.12万'
      }, {
        name: '三只小猪2',
        hint: '8.92万'
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
  
  line-height: 18px;
  padding: 12px 0;
  cursor: pointer;
}

.home-rank__item:hover {
  background-color: rgb(238, 241, 246);
}

.home-rank__rank {
  font-size: 18px;
  font-weight: bold;
  opacity: 0.5;
}

.home-rank__name {
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 190px;
}

.home-rank__hint {
  text-align: right;
  font-size: 12px;
  color: #ff0000;
}
</style>
