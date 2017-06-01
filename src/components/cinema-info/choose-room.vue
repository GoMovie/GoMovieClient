<template>
  <div class="choose-room">
    <el-row class="choose-room__date-select">
      <el-date-picker
        v-model="dateValue"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-row>
    <div class="choose-room__select-room">
      <el-row class="choose-room__header">
        <el-col :span="6"><div>放映时间</div></el-col>
        <el-col :span="4"><div>票价</div></el-col>
        <el-col :span="7"><div>放映厅</div></el-col>
        <el-col :span="7"><div>选座购票</div></el-col>
      </el-row>
      <el-row class="choose-room__screen-item" v-for="item in screenData" :key="item.id">
        <el-col :span="6">
          <div class="choose-room__item-time">{{getTimeStr(item.startTime)}}</div>
        </el-col>
        <el-col :span="4"><div>¥233</div></el-col>
        <el-col :span="7"><div>{{item.hall.name}}</div></el-col>
        <el-col :span="7"><el-button type="primary"
          @click="goSeatInfo">选座购票</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'choose-room',
  data () {
    return {
      screenData: [{
        'id': 21,
        'startTime': 1470187800000,
        'runningTime': 120,
        'movie': {
          'id': 6311303,
          'title': '加勒比海盗5：死无对证',
          'originalTitle': 'Pirates of the Caribbean: Dead Men Tell No Tales',
          'rating': 7.4,
          'genres': '动作,奇幻,冒险',
          'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2459723975.jpg',
          'onShow': true
        },
        'hall': {
          'id': 1,
          'name': '3D影厅',
          'description': null
        }
      }, {
        'id': 22,
        'startTime': 1470187800000,
        'runningTime': 120,
        'movie': {
          'id': 6311303,
          'title': '加勒比海盗5：死无对证',
          'originalTitle': 'Pirates of the Caribbean: Dead Men Tell No Tales',
          'rating': 7.4,
          'genres': '动作,奇幻,冒险',
          'imageUrl': 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2459723975.jpg',
          'onShow': true
        },
        'hall': {
          'id': 3,
          'name': '2D影厅',
          'description': null
        }
      }],
      dateValue: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      }
    }
  },
  methods: {
    getTimeStr (timeStamp) {
      let newDate = new Date()
      newDate.setTime(timeStamp)
      return newDate.toLocaleTimeString()
    },
    getDataStr () {
      let newDate = new Date()
      // newDate.setTime(timeStamp)
      return newDate.toLocaleDateString()
    },
    goSeatInfo: function () {
      this.$router.push('/seat-info')
    }
  }
}
</script>

<style scoped>
.choose-room {
  margin: 0 20px 20px 10px;
}

.choose-room__date-select {
  text-align: left;
  margin: 0 0px 10px;
}

.choose-room__select-room {
  border: 0.5px solid RGBA(204, 204, 204, 1.00);
}

.choose-room__header {
  font-size: 14px;
  padding: 10px 20px;
  background-color: RGBA(223, 223, 223, 1.00)
}

.choose-room__item-time {
  font-weight: bold;
}

.choose-room__screen-item {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 0.5px solid RGBA(204, 204, 204, 1.00);
}
</style>
