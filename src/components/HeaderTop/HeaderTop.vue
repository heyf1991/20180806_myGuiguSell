<template>
    <div class="header">
      <!-- 这个组件知识点：1.<slot>标签占位；2.props子组件获得父组件传过来的data -->
      <slot name="left"></slot>
      <slot name="right"></slot>
      <p style="text-align: center;overflow: hidden">{{title}}</p>
    </div>
</template>
<script>
    export default {
      props:{
        title: String
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    padding 0 10px
    p
    background #02a774
    line-height 50px
    color #fff
    font-size 20px
</style>
