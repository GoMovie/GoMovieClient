<template>
  <div class="trade-board">
    <el-button type="primary" class="trade-board__button" size="large" @click="dialogVisible = true">我要转让</el-button>
    <h1 class="trade-board__title">转让版</h1>
    <trade-table :trade-data="tradeData"></trade-table>
    <el-dialog title="新建转让" :visible.sync="dialogVisible" size="tiny" @close="resetForm">
      <el-form :model="form" :rules="rules" label-width="80px" ref="form">
        <el-form-item label="电影名" prop="movie">
          <el-input v-model="form.movie"></el-input>
        </el-form-item>
        <el-form-item label="电影院" prop="cinema">
          <el-input v-model="form.cinema"></el-input>
        </el-form-item>
        <el-form-item label="场次" prop="time">
          <el-input v-model="form.time"></el-input>
        </el-form-item>
        <el-form-item label="转让价" prop="price">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="转让人" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'trade-board',
  data () {
    return {
      dialogVisible: false,
      form: {
        movie: '',
        cinema: '',
        time: '',
        price: '',
        username: ''
      },
      tradeData: [{
        movie: '摔跤吧！爸爸',
        cinema: '大学城电影院',
        time: '明天下午3点',
        price: '45元',
        username: '胡弘康'
      }, {
        movie: '加勒比海盗5',
        cinema: '金逸影城',
        time: '后天上午9点',
        price: '30元',
        username: '赵明宇'
      }],
      rules: {
        movie: [{ required: true, message: '请输入电影名称', trigger: 'blur' }],
        cinema: [{ required: true, message: '请输入电影院名称', trigger: 'blur' }],
        time: [{ required: true, message: '请输入电影场次', trigger: 'blur' }],
        price: [{ required: true, message: '请输入转让价格', trigger: 'blur' }],
        username: [{ required: true, message: '请输入你的姓名', trigger: 'blur' }]
      }
    }
  },
  components: {
    'trade-table': require('../components/trade-board/trade-table.vue')
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.tradeData.push(Object.assign({}, this.form))
          this.dialogVisible = false
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

<style scoped>
.trade-board {
  width: 90%;
  margin: 0 auto;
  padding-top: 10px;
}
.trade-board__title {
  margin-top: 0;
  text-align: left;
}
.trade-board__button {
  float: right;
}
</style>
