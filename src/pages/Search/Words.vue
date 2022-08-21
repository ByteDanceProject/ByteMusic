<template>
  <div>
    歌词
    <div>{{ searchResult }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 歌词
  name: "Words",
  computed: {
    ...mapState({ searchResult: (state) => state.search.searchResult }),
  },
};
</script>

<style>
</style>