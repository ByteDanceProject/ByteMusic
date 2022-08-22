<template>
  <div class="searchTips">
    <div class="">
      <p>
        <a href="">搜“{{ keywords }}”相关用户</a>
      </p>
      <div class="box" v-if="searchSuggest.songs">
        <h5 class="song"><i class="el-icon-headset icon"></i> 单曲</h5>
        <ul>
          <li v-for="(song, index) in searchSuggest.songs" :key="song.id">
            <a href="">{{ song.name }}</a>
          </li>
        </ul>
      </div>
      <div class="box" v-if="searchSuggest.artists">
        <h5 class="song"><i class="el-icon-s-custom icon"></i> 歌手</h5>
        <ul>
          <li v-for="(singer, index) in searchSuggest.artists" :key="singer.id">
            <a href="">{{ singer.name }}</a>
          </li>
        </ul>
      </div>
      <div class="box" v-if="searchSuggest.albums">
        <h5 class="song"><i class="el-icon-aim icon"></i> 专辑</h5>
        <ul>
          <li v-for="(album, index) in searchSuggest.albums" :key="album.id">
            <a href=""> {{ album.name }}</a>
          </li>
        </ul>
      </div>
      <div class="box" v-if="searchSuggest.playlists">
        <h5 class="song"><i class="el-icon-document-copy icon"></i> 歌单</h5>
        <ul>
          <li
            v-for="(playlist, index) in searchSuggest.playlists"
            :key="playlist.id"
          >
            <a href=""> {{ playlist.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchSuggest",
  props: ["keywords"],
  computed: {
    // 拿到搜索建议
    ...mapState({ searchSuggest: (state) => state.search.searchSuggest }),
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.searchTips {
  z-index: 100;
  width: 310px;
  background-color: white;
  box-shadow: 0 3px 6px #555;
  border-radius: 3px;
  margin-top: 5px;
  p {
    height: 25px;
    line-height: 25px;
    border-bottom: 1px solid #c0c0c0;
    text-indent: 15px;
  }
  a:hover {
    text-decoration: none;
  }
  .box {
    position: relative;
  }

  .song {
    display: block;
    position: absolute;
    top: 5px;
    left: 0px;
    a {
      overflow: hidden;
    }

    .icon {
      text-indent: 10px;
    }
  }

  ul {
    display: block;
    margin-left: 60px;
    border-left: 1px solid #c0c0c0;
    border-top: 1px solid #c0c0c0;
    margin-top: -1px;
    text-indent: 10px;
  }

  li {
    margin: 3px 0;
    padding: 3px 0;
    list-style: none;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
  }
  li:hover {
    background-color: #cecece;
    cursor: pointer;
  }
}
</style>