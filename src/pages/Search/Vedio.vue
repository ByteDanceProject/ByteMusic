<template>
  <div>
    <div class="videos">
      <ul>
        <li v-for="(video, index) in videos" :key="video.vid">
          <div class="imgDiv">
            <div>
              <a href="" class="imgBox">
                <div class="mask playtime">
                  <i class="el-icon-video-camera"> </i>
                  {{ video.playTime | changeNum }}
                </div>
                <div class="mask duratime">
                  {{ video.durationms | changeTime }}
                </div>
                <img v-lazy="video.coverUrl" class="imgList" />
              </a>
            </div>
            <p class="intro1 hidden">
              <a href="">
                <i class="el-icon-video-camera"> </i>{{ video.title }}</a
              >
            </p>
            <p class="intro2 hidden">
              <a
                href=""
                v-for="(singer, index) in video.creator"
                :key="index"
                class="name"
              >
                {{ singer.userName }}</a
              >
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
  name: "Vedio",
  computed: {
    ...mapState({ videos: (state) => state.search.searchResult.videos }),
  },
  filters: {
    changeNum(playTime) {
      if (playTime > 10000) {
        playTime = (playTime * 0.0001).toFixed(2) + "万";
      }
      return playTime;
    },
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
};
</script>

<style lang="less" scoped>
.videos {
  background-color: white;
  ul {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  li {
    width: 25%;
    list-style: none;
    display: block;
    margin-bottom: 10px;
    .imgDiv {
      padding: 5px 0;
      .imgBox {
        position: relative;
        .mask {
          position: absolute;
          display: inline-block;
          background-color: rgba(0, 0, 0, 0.869);
          color: white;
          opacity: 0.7;
          padding: 0 2px;
        }
        .playtime {
          left: 10%;
        }
        .duratime {
          left: 10%;
          top: 80%;
        }
      }

      .imgList {
        width: 120px;
        height: 80px;
        // img水平居中
        display: block;
        margin: 0 auto;
        border: 0.5px solid #c0c0c0;
      }
      .name {
        color: gray;
        font-size: 5px;
      }
      .intro1 {
        width: 120px;
        //文字缩进和图片对齐
        text-indent: 8px;
        padding-top: 5px;
        i {
          margin-right: 2px;
        }
      }
      .intro2 {
        width: 120px;
        //文字缩进和图片对齐
        text-indent: 15px;
        padding-top: 5px;
      }
      .hidden {
        //超出隐藏
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>