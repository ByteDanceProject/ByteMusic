<template lang="html">
    <div class="">
        <MusicListNav/>
        <keep-alive> <!--缓存-->
            <router-view/>
        </keep-alive>   
    </div>
</template>

<script>
import MusicListNav from "./musiclist/music_listnav.vue";
export default {
  name: "listcate",
  components: {
    MusicListNav,
  },
};
</script>

<style>
</style>