<template lang="html">
    <div class="">
        <!-- <SwiperBanner/>  轮播图 -->
        <MusicList/>
        <songs/>
        <MusicListNav/>
        <router-view/>
    </div>
</template>

<script>
import songs from "../components/songs";
import MusicList from "../components/MusicList";
import MusicListNav from "./musiclist/music_listnav.vue";
// import SwiperBanner from '../components/Swiper_Banner';

export default {
  name: "home",
  components: {
    songs,
    MusicList,
    MusicListNav,
    // SwiperBanner,
  },
};
</script>

<style>
</style>