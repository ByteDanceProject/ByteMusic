<template lang="html">
  <div class="mod-albums">
    <div class="hd log url">
      <h2>热门歌手榜单：</h2>
      <div>
        更多
      </div>
    </div>
    <SingerList
      v-for="(item, index) in singerList"
      :key="index"
      :pic="item.img1v1Url"
      :name="item.name"
      :id="item.id"
    ></SingerList>
  </div>
</template>

<script>
import SingerList from "../components/SingerList.vue";
export default {
  name: "artists",
  components: {
    SingerList
  },
  data() {
    return {
      //歌手信息数组
      singerList: []
    };
  },
  mounted() {
    // 获取所有榜单 /toplist
    var url = this.HOST + "/artist/list";
    this.$axios
      .get(url)
      .then(res => {
        console.log(res.data.artists[0].id);
        this.singerList = res.data.artists;
        console.log(this.singerList);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.mod-albums {
  background: #b7b7b7;
  padding: 10px 17px;
}
.hd {
  display: flex;
  margin: 14px 0 18px 0;
}
.hd h2 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.hd div {
  width: 64px;
  font-size: 12px;
  text-align: right;
}
</style>
