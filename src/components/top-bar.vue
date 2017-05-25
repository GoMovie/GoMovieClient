<template>
  <div class="top-bar">
    <el-row class="top-bar__container">
      <el-col :span='1'>
        <img class="top-bar__logo"
          src="http://oowu6eof3.bkt.clouddn.com/gomovie-logo.png" />
      </el-col>
      <el-col :span='3'>
        <div class="top-bar__app-name">
          Go Movie
        </div>
      </el-col>
      <el-col :span="20">
        <el-menu class="top-bar__menu" mode="horizontal">
          <el-menu-item class="top-bar__item" v-for='item in items' :index="item.title" key="item.title"><i :class="'el-icon-'+item.icon"></i>{{item.title}}</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  data () {
    return {
      activeIndex: '',
      items: [{
        icon: 'menu',
        title: '首页'
      }, {
        icon: 'message',
        title: '按钮1'
      }, {
        icon: 'close',
        title: '按钮2'
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
}

.top-bar__container {
  height: 80px;
  background-color: RGBA(238, 241, 246, 1.00);
  box-shadow: 0 2px 2px #A3A3A3;
}

.top-bar__logo {
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-top: 8px;
  margin-left: 20px;
}

.top-bar__app-name{
  line-height: 80px;
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
}

.top-bar__item {
  line-height: 80px;
  height: 80px;
  font-size: 18px;
}

.top-bar__item:hover, .top-bar__item.is-active {
  background-color: #20A0FF;
  color: #FFFFFF;
}
</style>
