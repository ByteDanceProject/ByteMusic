<template lang="html">
    <div class="music">
      <ul>
        <li><a>上一首</a></li>
        <li><a>播放</a></li>
        <li><a>下一首</a></li>
      </ul>
        <!-- <audio ref="player" controls :src="playerData.url"></audio> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      playerData: {},
    };
  },
  mounted() {
    this.$api
      .getPlayer({
        id: this.$route.params.id,
      })
      .then((res) => {
        this.playerData = res.data[0];
        // console.log(res.data[0]);
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  margin-left: 40px;
  list-style-type: none;
  overflow: hidden;
  position: fixed;
  top: 90%;
  width: 100%;
}

li {
  margin-left: 50px;
  flex: 1;
  text-align: center;
  float: left;
}

li a {
  display: block;

  color: black;

  text-align: center;

  padding: 14px 16px;

  text-decoration: none;
}
li a:hover {
  background-color: red;
}
audio {
  margin-left:-100px;
  list-style-type: none;
  overflow: hidden;
  position: fixed;
  top: 90%;
  width: 80%;
}
</style>