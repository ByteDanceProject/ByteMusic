<template lang="html">
    <swiper :modules="modules" :pagination="{ clickable: true }">
     <swiper-slide>Slide 1</swiper-slide>
     <swiper-slide>Slide 2</swiper-slide>
     <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
// more module style...

export default {
  components: {
    swiper,
    swiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.banner {
  padding: 10px;
}
</style>