<template>
  <div class="register-dialog">
    <el-dialog class="register-dialog__container"
      :title="dialogTitle"
      v-model="visible" size="tiny"
      :modal-append-to-body="false"
      :show-close="false">
      <el-form class="register-dialog__form"
        :model="form">
        <el-form-item :required="true" class="register-dialog__input-item">
          <el-input
            class="register-dialog__input"
            v-model="form.username"
            placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item :required="true" class="register-dialog__input-item">
          <el-input
            class="register-dialog__input"
            v-model="form.password"
            placeholder="用户密码"></el-input>
        </el-form-item>
        <el-form-item :required="true" class="register-dialog__input-item">
          <el-input
            class="register-dialog__input"
            v-model="form.repeatPassword"
            placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item class="register-dialog__submit-item">
          <el-button class="register-dialog__submit-btn"
            type="primary" @click="onSubmit">注册</el-button>
        </el-form-item>
      </el-form>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'register-dialog',
  data () {
    return {
      dialogTitle: '用户注册',
      visible: false,
      form: {
        username: '',
        password: '',
        repeatPassword: ''
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
.register-dialog__submit-btn {
  width: 100%;
}

.register-dialog__input-item {
  margin-bottom: 5px;
}

.register-dialog__submit-item {
  margin-top: 15px;
}

.register-dialog__form {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
