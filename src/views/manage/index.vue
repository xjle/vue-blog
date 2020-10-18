<template>
  <div class="manage">
    <el-container>
      <el-header>
        <nav-bar/>
      </el-header>
      <el-container>
        <el-aside width="230px"><side-bar/></el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index'
import SideBar from '@/components/SideBar/index'
export default {
  name: 'Manage',
  components: {
    NavBar,
    SideBar
  }
}
</script>
<style scoped>
.el-aside{
  outline: 1px solid;
  height: 600px;

}
.el-main{
  padding: 0;
}
.el-header{
  padding: 0 ;
}
</style>
