<template lang="html">
    <div class="">
        <MusicList/>
        <songs/>
    </div>
</template>

<script>
import songs from "../components/songs";
import MusicList from "../components/MusicList";
import MusicListNav from "./musiclist/music_listnav.vue";

export default {
  name: "home",
  components: {
    songs,
    MusicList,
    MusicListNav,
  },
};
</script>

<style>
</style>