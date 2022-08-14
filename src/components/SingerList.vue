<template lang="html">
    <div class="mod-albums">
        <div class="hd log url">
            <h2>歌手</h2>
            <div>
                更多
            </div>
        </div>
        <div class="container">
                <div class="gallery">
                    <div class="scroller">
                        <!-- 遍历歌单图片 -->
                        <div class="card url" v-for="(item, index) in singerList" :key="index">
                            <div class="album">
                                <img :src="item.img1v1Url" alt="" @click="">
                                <div class="name">{{item.name}}</div>
                                <div class="author">{{}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: "Singer",
  data() {
    return {
      singerList: [],
    };
  },
  mounted() {
    // 获取所有榜单 /toplist
    var url = this.HOST + "/artist/list";
    this.$axios
      .get(url)
      .then((res) => {
        console.log(res.data.artists[0].id);
        this.singerList = res.data.artists;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    
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
.mod-albums .gallery {
  overflow: hidden;
  margin: 0 -5px;
}
.mod-albums .gallery .card {
  width: 33.3%;
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5px 10px;
}
.mod-albums .gallery .card .album {
  position: relative;
  /* position: fixed; */
}
.mod-albums .gallery .card img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
}
.mod-albums .gallery .card .name {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 4px;
  line-height: 14px;
  max-height: 28px;
  margin-bottom: 2px;
}
.mod-albums .gallery .card .author{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
    font-size: 12px;
    line-height: 12px;
}
</style>