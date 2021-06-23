<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <home-header />
    <home-swiper />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/Header.vue";
import HomeSwiper from "@/components/home/Swiper.vue"
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  },
};
</script>
