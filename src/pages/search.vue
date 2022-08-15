<template >
  <div>
    <div class="searchArea">
      <input type="text" name="" class="searchBox" v-model="keyword" />
      <button class="" type="button" @click="goSearch">搜索</button>
    </div>
    <!-- 展示区域 -->
    <div>搜索"{{ keyword }}"，找到 20 首单曲</div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {},
  },
};
</script>

<style lang="less" scoped>
.searchArea {
  vertical-align: middle;
  text-align: center;
  .searchBox {
    width: 320px;
    height: 40px;
  }
  button {
    height: 40px;
    width: 40px;
  }
}
</style>