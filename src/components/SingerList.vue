<template>
  <div class="mod-albums">
    <div class="container">
      <div class="pic">
        <img :src="pic" alt="" />
      </div>
      <div class="message">
        <span class="name">{{ name }}</span>
        <span class="author">{{ singermessage.briefDesc }}</span>
      </div>
    </div>
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
  background-color: rgb(251, 251, 253);
  margin: 5px;
}
.container {
  width: auto;
  height: 130px;
  margin: auto;
  position: relative;
  background-color: rgb(183, 183, 183);
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
  position: absolute;
  top: 7px;
  left: 120px;
}
.message .author {
  width: 200px;
  height: 98px;
  float: left;
  display: -webkit-box;
  width: auto;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-size: 14px;
  margin: 5px 0 0 15px;
  position: absolute;
  top: 25px;
  left: 120px;
}
.message span {
}
</style>
