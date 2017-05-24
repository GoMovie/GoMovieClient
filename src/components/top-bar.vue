<template>
  <div class="top-bar">
    <el-menu class="tp-menu" mode="horizontal">
      <el-menu-item class="tb-item" index="1"><i class="el-icon-menu"></i>Home</el-menu-item>
      <el-menu-item class="tb-item" index="2"><i class="el-icon-message"></i>btn2</el-menu-item>
      <el-menu-item class="tb-item" index="3"><i class="el-icon-close"></i>btn3</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  data () {
    return {}
  }
}
</script>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  box-shadow: 0 2px 2px #A3A3A3;
  z-index: 900;
}

.tp-menu {
  height: 80px;
}

.tb-item {
  line-height: 80px;
  height: 80px;
  font-size: 16px;
}

.tb-item:hover {
  background-color: #20A0FF;
  color: #FFFFFF;
}
</style>
