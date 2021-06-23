<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <home-header :city="city"/>
    <home-swiper :swiper="swiper"/>
    <home-icons :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/Header.vue";
import HomeSwiper from "@/components/home/Swiper.vue"
import HomeIcons from "@/components/home/Icons.vue"
import HomeRecommend from "@/components/home/Recommend.vue"
import HomeWeekend from "@/components/home/Weekend"
import axios from 'axios'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      city:'',
      swiper:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted() {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo(){
      axios.get('/home/info')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data)
      this.city = res.data.city
      this.swiper = res.data.swiperList
      this.iconList = res.data.iconList
      this.recommendList = res.data.recommendList
      this.weekendList = res.data.weekendList
    }
  },
};
</script>
