<template lang="html">
    <div class="">
        <MusicList/>
        <songs/>
    </div>
</template>

<script>
import songs from "../components/songs";
import MusicList from "../components/MusicList";

export default {
  name: "home",
  components: {
    songs,
    MusicList,
  },
};
</script>

<style>
</style>