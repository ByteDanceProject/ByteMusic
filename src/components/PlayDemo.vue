<template lang="html">
    <div class="music">
        <audio ref="player" controls :src="playerData.url"></audio>
    </div>
</template>

<script>
export default {
  data() {
    return {
      playerData: {},
    };
  },
  mounted() {
    this.$api
      .getPlayer({
        id: this.$route.params.id,
      })
      .then((res) => {
        this.playerData = res.data[0];
        // console.log(res.data[0]);
      });
  },
};
</script>

<style>
</style>