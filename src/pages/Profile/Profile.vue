<template>
    <div>
      <HeaderTop title="我的"/>
      <div>
        <router-link to="/login">
          登录 | 注册
        </router-link>
      </div>
    </div>
</template>
<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    components:{
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
