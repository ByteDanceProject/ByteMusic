<template>
  <div class="single">
    <ul>
      <li
        v-for="(songs, index) in searchResult.songs"
        :key="songs.id"
        :class="{ cur: currentIndex == index }"
        @mouseenter="changeIndex(index)"
        @mouseleave="leaveIndex"
      >
        <div class="songname hidden">
          <a href=""> <i class="el-icon-video-play"></i></a>
          <a href=""> {{ songs.name }}</a>
          <a href="" v-if="songs.mvid !== 0"
            ><i class="el-icon-video-camera"></i
          ></a>
        </div>
        <div class="songicon hidden" :class="{ icon: currentIndex == index }">
          <a href=""><i class="el-icon-plus"></i></a>
          <a href=""><i class="el-icon-folder-add"></i></a>
        </div>
        <div class="songername hidden">
          <span v-for="(item, index) in songs.artists" :key="index">
            <router-link to="/artists">{{
              index === 0 &&
              songs.artists.length > 1 &&
              index !== songs.artists.length - 1
                ? item.name + "/"
                : item.name
            }}</router-link>
          </span>
        </div>
        <div class="albumname hidden">
          <a href="">《{{ songs.album.name }}》</a>
        </div>
        <div class="time hidden">
          {{ songs.duration | changeTime }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  // 单曲
  name: "Single",
  data() {
    return {
      currentIndex: -1,
    };
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
    },
  },
  computed: {
    //获取搜索的结果
    ...mapState({ searchResult: (state) => state.search.searchResult }),
  },
  filters: {
    changeTime(duration) {
      var time = duration / 1000;
      //分钟
      var minute = time / 60;
      var minutes = parseInt(minute);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      //秒
      var second = time % 60;
      var seconds = Math.round(second);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      duration = `${minutes}:${seconds}`;
      return duration;
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.single {
  ul {
    padding-top: 20px;
    li {
      height: 30px;
      line-height: 30px;
      padding: 5px 5px;
      margin-top: 1px;
      margin-bottom: -1px;
      border: 1px solid white;
    }
    div {
      height: 30px;
      float: left;
    }
    .hidden {
      //超出隐藏
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .songname {
      width: 35%;
    }
    .songicon {
      width: 10%;
      opacity: 0;
    }
    .icon {
      opacity: 1;
    }
    .songername {
      width: 20%;
    }
    .albumname {
      width: 25%;
    }
    .time {
      width: 10%;
    }
    .cur {
      border: 1px solid #c0c0c0;
    }
  }
  //去除滚动条
  ul::-webkit-scrollbar {
    display: none;
  }
}
</style>