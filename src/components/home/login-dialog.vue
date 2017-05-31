<template>
  <div class="login-dialog">
    <el-dialog
      class="login-dialog__container"
      :title="dialogTitle"
      v-model="visible" size="tiny"
      :modal-append-to-body="false"
      :show-close="false">
      <el-form class="login-dialog__form"
        :model="form">
        <el-form-item :required="true" class="login-dialog__input-item">
          <el-input
            class="login-dialog__input"
            v-model="form.username"
            placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item :required="true" class="login-dialog__input-item">
          <el-input
            class="login-dialog__input"
            v-model="form.password"
            placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item class="login-dialog__submit-item">
          <el-button class="login-dialog__submit-btn"
            type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login-dialog',
  // props: ['visible'],
  data () {
    return {
      dialogTitle: '用户登录',
      visible: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    open: function () {
      this.visible = true
    },
    onSubmit: function () {
      // console.log('submit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-dialog__submit-btn {
  width: 100%;
}

.login-dialog__input-item {
  margin-bottom: 5px;
}

.login-dialog__submit-item {
  margin-top: 15px;
}

.login-dialog__form {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
