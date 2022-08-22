<template>
  <div>
    <div class="singer">
      <ul>
        <li v-for="(singer, index) in artists" :key="singer.id">
          <div class="imgDiv">
            <div class="imgBox">
              <a href="" class="flexbox"
                ><img
                  v-lazy="singer.img1v1Url"
                  :alt="singer.name"
                  class="imgList"
              /></a>
            </div>
            <p class="intro">
              <a href="">
                <span>{{ singer.name }}</span>
              </a>
              <i class="el-icon-s-custom"></i>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 歌手
  name: "Singer",
  computed: {
    ...mapState({ artists: (state) => state.search.searchResult.artists }),
  },
};
</script>

<style lang="less" scoped>
.singer {
  background-color: white;
  ul {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  li {
    width: 25%;
    height: 50%;
    list-style: none;
    margin-bottom: 5%;
    display: block;
    // margin: 0 auto;
    .imgDiv {
      padding: 5px 0;
      .imgList {
        width: 120px;
        height: 120px;
        // img水平居中
        display: block;
        margin: 0 auto;
        border: 0.5px solid #c0c0c0;
      }
      .intro {
        //文字缩进和图片对齐
        text-indent: 15px;
        padding-top: 5px;
      }
    }
  }
}
</style>