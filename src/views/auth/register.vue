<template>
  <div class="register">
    <el-form
      :model="registerForm"
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="registerForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="registerForm.code" style="width: 170px"></el-input>
        <el-button
          @click="getCode"
          :disabled="codeFlag"
          style="width: 130px"
        >
          {{ codeContent }}
        </el-button>
      </el-form-item>
      <!-- <el-form-item label="类型" prop="type">
        <el-radio-group v-model="registerForm.type" @change="btnChange">
          <el-radio label="user">用户</el-radio>
          <el-radio label="admin">管理员</el-radio>
        </el-radio-group>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')"
          >注册</el-button
        >
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      codeFlag: false,
      codeContent: '获取验证码',
      codeTime: 60,
      registerForm: {
        email: '',
        password: '',
        // type: 'user',
        code: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur'
          }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      //  提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('111')
          // if (this.api) {
          //   this.getRegisterAdmin()
          // } else {
          //   this.getRegisterUser()
          // }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      // 清空表单
      this.$refs[formName].resetFields()
    },
    getRegisterAdmin () {
      console.log('管理员')
    },
    getRegisterUser () {
      console.log('用户')
    },
    getCode () {
      // 获取验证码
      if (this.registerForm.email) {
        const data = { email: this.registerForm.email }
        console.log(data)
      } else {
        this.$message.error('请输入邮箱')
      }
    },
    btnChange (val) {
      // 判断用户类型
      console.log(1)
    },
    daoTime () {
      // 获取验证码间隔
      if (this.codeFlag) return
      this.codeFlag = true
      this.codeContent = `${this.codeTime}s后重新发送`
      const clock = window.setInterval(() => {
        this.codeTime--
        this.codeContent = `${this.codeTime}s后重新发送`
        if (this.codeTime < 0) {
          window.clearInterval(clock)
          this.codeTime = 60
          this.codeContent = '获取验证码'
          this.codeFlag = false
        }
      }, 1000)
    }
  }
}
</script>
<style scoped>
.registerForm {
  width: 400px;
  margin: 0 auto;
}
</style>
