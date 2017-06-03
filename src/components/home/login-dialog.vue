<template>
  <div class="login-dialog">
    <el-dialog
      class="login-dialog__container"
      :title="dialogTitle"
      :visible.sync="visible" size="tiny"
      :modal-append-to-body="false"
      @close="resetForm">
      <el-form class="login-dialog__form"
        :model="form" :rules="rules" ref="form">
        <el-form-item :required="true" class="login-dialog__input-item"  prop="username">
          <el-input
            class="login-dialog__input"
            v-model="form.username"
            placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item :required="true" class="login-dialog__input-item" prop="password">
          <el-input
            class="login-dialog__input"
            v-model="form.password"
            placeholder="用户密码"
            type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </div>
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
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    open: function () {
      this.visible = true
    },
    submitForm: function () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let users = this.$store.state.users
          if (users.some((user) => user.username === this.form.username && user.password === this.form.password)) {
            this.$store.commit('login', Object.assign({}, this.form))
            this.visible = false
          } else {
            this.$message('用户名或密码错误！！')
            return false
          }
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-dialog__form {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
