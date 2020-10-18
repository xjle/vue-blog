<template>
  <div class="home">
    <el-container>
      <el-header>
        <nav-bar/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar/index'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
<style scoped>
.home{
  width: 1140px;
  min-width: 1140px;
  margin: 0 auto;
}
</style>
