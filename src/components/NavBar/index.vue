<template>
  <div class="layout">
    <div class="logo"></div>
    <div class="content"><nav-content/></div>
    <div class="user-info"><nav-user-info/></div>
  </div>
</template>

<script>
import NavContent from '@/components/NavBar/navContent.vue'
import NavUserInfo from '@/components/NavBar/navUserInfo.vue'
export default {
  name: 'Layout',
  components: {
    NavContent,
    NavUserInfo
  }
}
</script>
<style scoped>
.layout{
  width: 100%;
  border: 1px solid #ccc;
  height: 60px;
}
.logo{
  width: 230px;
  float: left;
  height: 60px;
  background: yellow;

}
.content{
  height: 60px;
  width: 640px;
  float: left;
}
.user-info{
  height: 60px;
  width: 230px;
  float: right;

}
</style>
