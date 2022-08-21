<template>
  <div>
    <div class="singer">
      <ul>
        <li v-for="(album, index) in albums" :key="album.id">
          <div class="imgDiv">
            <div class="imgBox">
              <a href="" class="flexbox"
                ><img
                  v-lazy="album.blurPicUrl"
                  :alt="album.name"
                  class="imgList"
                />
              </a>
            </div>
            <p class="intro1">
              <a href="">
                <span>{{ album.name }}</span>
              </a>
            </p>
            <p class="intro2">
              <a href="">
                <span>{{ album.artist.name }}</span>
              </a>
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
  // 专辑
  name: "Album",
  computed: {
    ...mapState({ albums: (state) => state.search.searchResult.albums }),
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
    margin-right: 5%;
    margin-bottom: 5%;
    display: block;
    margin: 0 auto;
    .imgDiv {
      padding: 5px 0;
      .imgList {
        width: 120px;
        height: 120px;
        // img水平居中
        display: block;
        margin: 0 auto;
        border: 0.5px solid #141414;
      }
      .intro1 {
        //文字缩进和图片对齐
        text-indent: 20px;
        margin-top: 10px;
        //超出隐藏省略号
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .intro2 {
        //文字缩进和图片对齐
        text-indent: 20px;
        font-size: 6px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>