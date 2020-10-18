<template>
   <el-menu default-active="/manage/" :router="true">
      <el-menu-item index="/manage/user/">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/manage/">
        <i class="el-icon-setting"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: 'SideBar'
}
</script>
