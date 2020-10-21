<template>
  <div class="nav-content">
    <!-- <template> </template>
    <template> </template>
    <template> </template> -->
    <el-menu :default-active="$route.path"  class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/shop/">购物</el-menu-item>
      <el-menu-item index="/settlement/">结算</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavContent',
  data () {
    return {
    }
  },
  methods: {
    handleSelect () {
      console.log(1)
    }
  }
}
</script>
<style scoped>
.nav-content{
  width: 100%;
  height: 100%;

}
.nav-content .el-menu.el-menu--horizontal{
  border: none;
}
</style>
