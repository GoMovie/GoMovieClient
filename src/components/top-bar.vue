<template>
  <div class="top-bar">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><i class="el-icon-menu"></i>Home</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-message"></i>btn2</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-close"></i>btn3</el-menu-item>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
