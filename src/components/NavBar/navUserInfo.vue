<template>
  <div class="nav-user-info">
    <template v-if="Flag">
      <el-button type="primary"  @click="btnGoAuth('login')">登陆</el-button>
      /
      <el-button @click="btnGoAuth('regester')">注册</el-button>
    </template>
    <template v-else>
        <el-popover  placement="bottom" width="200" trigger="click">
          <a slot="reference" class="n-name">1637898906@qq.com</a>
          <ul class="info">
            <li v-for="(item, i) in lists" :key="i">
              <i class="iconfont" :class="item.icon"></i>
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </el-popover>

    </template>
  </div>
</template>
<script>
export default {
  name: 'NavUserInfo',
  data () {
    return {
      Flag: true,
      lists: [
        { name: '个人设置', icon: 'icon-setting', url: '/', role: '0' },
        { name: '后台管理', icon: 'icon-manage', url: '/manage', role: '300' },
        { name: '退出登陆', icon: 'icon-logout', url: '/', role: '0' }
      ]
    }
  },
  methods: {
    btnGoAuth (val) {
      this.$router.push({ name: 'Auth', params: { type: val } })
    }
  }
}
</script>
<style scoped>
.nav-user-info{
  outline: 1px solid;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 60px;
}
.n-name{
  cursor: pointer;

}
.info{
  list-style: none;
  margin: 0 auto;
  padding: 0;

}
.info li{
  cursor: pointer;
  text-align: center;
  line-height: 36px;

}
.info li:hover{
  background: #ccc;
}
.iconfont{
  margin-right: 5px;
  font-size: 18px;
}
</style>
