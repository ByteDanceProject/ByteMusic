<template>
  <div class="mod-albums">
    <router-link to="artistsDetial">
      <div class="container">
        <div class="pic">
          <img :src="pic" alt="" />
        </div>
        <div class="message">
          <span class="name">{{ name }}</span>
          <span class="author">{{ singermessage.briefDesc }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SingerList",
  props: {
    pic: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      singermessage: []
    };
  },
  mounted() {
    // 获取歌手详细信息
    var url = this.HOST + `/artist/detail?id=${this.id}`;
    this.$axios
      .get(url)
      .then(res => {
        this.singermessage = res.data.data.artist;
        console.log(this.singermessage);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.mod-albums {
  background-color: rgb(183, 183, 183);
  margin: 5px;
}
.container {
  width: auto;
  height: 130px;
  margin: auto;
  position: relative;
  border-style: solid;
  background-color: rgb(209, 207, 207);
}
.container:hover {
  background-color: rgb(94, 91, 91);
  box-shadow: 7px 7px 5px #888888;
}
.pic {
  width: 115px;
  float: left;
  position: absolute;
  top: 8px;
  left: 11px;
}
.message .name {
  width: 200px;
  float: left;
  margin-left: 15px;
  font-weight: 700;
  color: black;
  position: absolute;
  top: 6px;
  left: 120px;
}
.message .author {
  border-top-style: solid;
  border-width: 2px;
  border-color: black;
  width: 200px;
  height: 97px;
  float: left;
  display: -webkit-box;
  width: auto;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-size: 14px;
  color: black;
  margin: 2px 5px 0 15px;
  position: absolute;
  top: 25px;
  left: 120px;
}
.message span {
}
</style>
