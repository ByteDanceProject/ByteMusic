<template>
  <div class="mod-albums">
    <div class="hd log url">
      <h2>
        歌手{{ this.$route.query.singerid
        }}{{ this.$route.query.singername }}榜单前50首歌曲：
      </h2>
    </div>

    <div class="content">
      <songList
        v-for="(item, index) in singersong"
        :key="index"
        :name="item.name"
        :alia="item.alia[0]"
      >
      </songList>
    </div>
    <div class="footer">
      <span class="more"> 下拉加载更多</span>
    </div>
  </div>
</template>

<script>
import songList from "@/components/songsList.vue";
export default {
  name: "ArtistsDetial",
  components: {
    songList
  },
  data() {
    return {
      singersong: []
    };
  },

  activated() {
    // 获取歌曲详细信息
    var url = this.HOST + `/artist/top/song?id=${this.$route.query.singerid}`;
    this.$axios
      .get(url)
      .then(res => {
        this.singersong = res.data.songs;
        console.log(this.singersong);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less">
.dhd h2 {
  font-size: 25px;
}
</style>
