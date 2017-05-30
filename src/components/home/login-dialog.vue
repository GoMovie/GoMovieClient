<template>
  <div class="login-dialog">
    <el-dialog id="dialog"
      :title="dialogTitle"
      v-model="dialogVisible" size="small"
      :close-on-click-modal="false">
    <div>
      <el-button id="download-demo" icon="arrow-down"
        type="primary">Get Demo</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login-dialog',
  props: ['dialogVisible'],
  data () {
    return {
      dialogTitle: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
