<template>
  <div class="seat-info">
    <el-row>
      <!-- <el-breadcrumb class="cinema-info__title">
        <el-breadcrumb-item to="/">{{movieTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item to="/">{{movieTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>选择座位</el-breadcrumb-item>
      </el-breadcrumb> -->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'seat-info',
  computed: {
    pathToMovieInfo: function () {

    },
    pathToCinemaInfo: function () {

    }
  },
  data () {
    return {
      msg: 'Choose Seat'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
