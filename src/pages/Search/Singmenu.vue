<template>
  <div>
    歌单
    <div>{{ searchResult }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // 歌单
  name: "SINGMENU",
  computed: {
    ...mapState({ searchResult: (state) => state.search.searchResult }),
  },
};
</script>

<style>
</style>