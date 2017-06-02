<template>
  <el-table :data="tradeData" height="400" border align="left" class="trade-table">
    <el-table-column
      prop="movie"
      label="电影名">
    </el-table-column>
    <el-table-column
      prop="cinema"
      label="电影院">
    </el-table-column>
    <el-table-column
      prop="time"
      label="场次">
    </el-table-column>
    <el-table-column
      prop="price"
      label="转让价">
    </el-table-column>
    <el-table-column
      prop="username"
      label="转让人">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'trade-table',
  props: ['tradeData'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
