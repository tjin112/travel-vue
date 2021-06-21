<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <home-header />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/Header.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
  },
};
</script>
