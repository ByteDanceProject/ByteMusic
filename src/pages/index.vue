<template lang="html">
<div class="index">
        <ul>
                <li>
                        <router-link to="/home">
                        <img src="../assets/logo.png" alt="">
                        </router-link>

                </li>
                <li>
                        <router-link to="/artists">
                                歌手
                        </router-link>
                </li>
                <li>
                        <router-link to="/listcate">
                                榜单
                        </router-link>
                </li>
                <li>
                        <router-link to="/ucenter">
                                我的
                        </router-link>
                </li>
                <li>
                    <div class="searchArea">
                    <form action="" class="searchFrom">
                      <input
                        type="text"
                        name=""
                        class="searchBox"
                        v-model="keywords"
                        @input="inputFunc"
                        @blur="tipShow=false"
                        @focus="tipShow = true"
                      />
                      <i class="el-icon-search icon-button" @click="goSearch"></i>
                    </form>
                    </div>
                </li>
                </ul>
                <Searchsuggest class='suggest' v-show='tipShow' :keywords='keywords'>
                </Searchsuggest>
       <keep-alive>
                <router-view/>
       </keep-alive>
</div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
  data() {
    return {
      keywords: "",
      tipShow: false,
    };
  },
  methods: {
    goSearch() {
      this.$router.push({
        name: "search",
        query: { keywords: this.keywords },
      });
    },
    // 发请求获取搜索建议
    getSuggest() {
      this.$store.dispatch("search/reqsearchSuggest", {
        keywords: this.keywords,
      });
    },
    inputFunc: throttle(function () {
      if (this.keywords !== "") {
        this.tipShow = true;
      } else {
        this.tipShow = false;
      }
      this.getSuggest();
    }, 50),
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.searchArea {
  text-align: center;
  height: 20px;
  position: relative;
  margin: 5px 0;
  .searchBox {
    border: 1px solid gray;
    width: 140px;
    height: 20px;
    font-size: 5px;
    border-radius: 20px;
    text-indent: 20px;
    margin: auto 0;
  }
  .icon-button {
    height: 15px;
    position: absolute;
    left: 5%;
    top: 30%;
    cursor: pointer;
  }
}
.index img {
  width: 30px;
  height: 30px;
}

.index ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
}

.index ul li {
  text-align: center;
  flex: 1;
}
.index ul li a {
  font-size: 16px;
  color: #999;
}
.index {
  position: relative;
  .suggest {
    width: 180px;
    position: absolute;
    left: 80%;
  }
}
</style>