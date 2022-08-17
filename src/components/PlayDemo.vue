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
      currentTime: 0,
    };
  },
  mounted() {
    this.$api
      .getPlayer({
        id: this.$route.params.id,
      })
      .then((res) => {
        this.playerData = res.data[0];
        console.log(res.data);
        this.addEventHandle();
      });
  },
  computed: {
    getUrl() {
      return decodeURIComponent(this.$route.params.image);
    },
  },
  beforeDestroy() {
    this.removeEventHandle();
  },
  methods: {
    /**
     * 获取音乐播放时间
     *  1.音乐总时长
     *  2.音乐正在播放的时间节点
     */

    addEventHandle() {
      this.$refs.player.addEventListener("timeupdate", this.currentTimeHandle);
    },
    removeEventHandle() {
      this.$refs.player.removeEventListener(
        "timeupdate",
        this.currentTimeHandle
      );
    },
    currentTimeHandle() {
      this.currentTime = this.$refs.player.currentTime;
      // console.log(this.$refs.player.duration);
    },
  },
};
</script>

<style>
</style>