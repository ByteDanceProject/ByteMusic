<template>
  <div>
    电台
    <div>{{ searchResult }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 电台
  name: "Station",
  computed: {
    ...mapState({ searchResult: (state) => state.search.searchResult }),
  },
};
</script>

<style>
</style>