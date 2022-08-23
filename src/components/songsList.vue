<template>
  <div class="content">
    <div class="songsmessage">{{ name }}:{{ alia }}</div>
  </div>
</template>

<script>
export default {
  name: "songList",
  props: {
    name: {
      type: String,
      default: ""
    },
    alia: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.content {
  width: auto;
  height: auto;
}
.songsmessage {
  margin-top: 5px;
  width: auto;
  height: 40px;
  background-color: aqua;
  font-size: 19px;
  font-weight: 700;
  line-height: 37px;
  padding-left: 10px;
  border: solid;
}
</style>
