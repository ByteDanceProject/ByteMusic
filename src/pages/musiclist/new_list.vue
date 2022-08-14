<template lang="html">
    <div class="new">
        <MusicList :url="url" />
    </div>
</template>

<script>
import MusicList from "../../components/Music_List.vue";
export default {
  data() {
    return {
      url: "/personalized/newsong",
    };
  },
  components: {
    MusicList,
  },
};
</script>

<style>
</style>