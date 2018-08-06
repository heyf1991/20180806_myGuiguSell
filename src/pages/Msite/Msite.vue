<template>
    <div>
      <HeaderTop title="重庆鸡公煲">
        <a href="javascript:;" style="float: left;color: #fff;font-size: 16px" slot="left">搜索</a>
        <a href="javascript:;" style="float: right;color: #fff;font-size: 16px" slot="right">登录 | 注册</a>
      </HeaderTop>
      <swiper :options="swiperOption" ref="mySwiper" class="bottom-border-1px">
        <!-- slides -->
        <swiper-slide>
          <img src="./images/swiper/01.png" style="width: 100%;"/>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/swiper/01.png" style="width: 100%;"/>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/swiper/01.png" style="width: 100%;"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            loop: false,
            coverflow: {
              rotate: 30,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows : true
            }
          }
        }
      },
      components:{
        HeaderTop,
        swiper,
        swiperSlide
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      mounted() {
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(0, 1000, false)
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
