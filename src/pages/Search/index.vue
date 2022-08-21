<template >
  <div class="body">
    <div class="searchArea">
      <form action="" class="searchFrom">
        <input
          type="text"
          name=""
          class="searchBox"
          v-model="searchParams.keywords"
          @input="inputFunc"
          @blur="tipShow = false"
          @focus="tipShow = true"
        />
        <i class="el-icon-search icon-button button" @click="goSearch"></i>
      </form>
    </div>
    <Searchsuggest
      v-show="tipShow"
      class="suggest"
      :keywords="this.searchParams.keywords"
    >
    </Searchsuggest>
    <!-- 展示区域 -->

    <div class="showArae">
      <div class="index">
        <!-- 条件搜索栏 -->
        <ul @click="changeType">
          <li data-type="1" :class="{ current: this.searchParams.type == '1' }">
            <router-link to="/search/single" data-type="1">单曲</router-link>
          </li>
          <li
            data-type="10"
            :class="{ current: this.searchParams.type == '10' }"
          >
            <router-link to="/search/album" data-type="10">专辑</router-link>
          </li>
          <li
            data-type="100"
            :class="{ current: this.searchParams.type == '100' }"
          >
            <router-link to="/search/singer" data-type="100">歌手</router-link>
          </li>
          <li
            data-type="1014"
            :class="{ current: this.searchParams.type == '1014' }"
          >
            <router-link to="/search/vedio" data-type="1014">视频</router-link>
          </li>
          <!-- <li
            data-type="1006"
            :class="{ current: this.searchParams.type == '1006' }"
          >
            <router-link to="/search/words" data-type="1006">歌词</router-link>
          </li>
          <li
            data-type="1000"
            :class="{ current: this.searchParams.type == '1000' }"
          >
            <router-link to="/search/singmenu" data-type="1000"
              >歌单</router-link
            >
          </li>
          <li
            data-type="1009"
            :class="{ current: this.searchParams.type == '1009' }"
          >
            <router-link to="/search/station" data-type="1009"
              >电台</router-link
            >
          </li> -->
          <li
            data-type="1002"
            :class="{ current: this.searchParams.type == '1002' }"
          >
            <router-link to="/search/user" data-type="1002">用户</router-link>
          </li>
        </ul>
      </div>
      <router-view />
    </div>
    <Pagination
      v-show="total > 0 ? true : false"
      @updatePage="updatePage"
      :pageNo="pageNo"
      :pageSize="searchParams.limit"
      :total="total"
      :continues="continues"
    />
  </div>
</template>

<script>
import throttle from "lodash/throttle";
// import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchParams: {
        keywords: this.$route.query.keywords,
        type: "1",
        offset: 0,
        limit: 20,
      },
      pageNo: 1,
      continues: 3,
      tipShow: false,
    };
  },
  computed: {
    // //获取商品总数，传给分页器计算总页数
    // ...mapState({ total: (state) => state.search.searchResult.songCount }),
    total() {
      let map = new Map();
      map.set("1", "songCount");
      map.set("10", "albumCount");
      map.set("100", "artistCount");
      map.set("1014", "videoCount");
      map.set("1006", "songCount");
      map.set("1000", "playlistCount");
      map.set("1009", "djRadiosCount");
      map.set("1002", "userprofileCount");
      return this.$store.state.search.searchResult[
        map.get(this.searchParams.type)
      ];
    },
  },
  methods: {
    goSearch() {
      //每次点击搜索按钮时候默认搜索类型为第1类
      this.searchParams.type = "1";
      this.searchParams.offset = 0;
      this.pageNo = 1;
      console.log(this.searchParams.type);
      this.getData();
    },
    changeType(event) {
      let element = event.target;
      // console.log(element.nodeName);
      // //当前li标签
      let li;
      if (element.nodeName == "A") {
        li = element.parentNode;
      } else {
        li = element;
      }
      this.searchParams.type = element.dataset.type;
      //切换类型搜索时，当前页码为1，offset为0
      this.searchParams.offset = 0;
      this.pageNo = 1;
      this.getData();
    },
    // 发请求获取最新的搜索列表
    getData() {
      this.$store.dispatch("search/reqgetSearch", this.searchParams);
    },
    updatePage(pageNo) {
      this.pageNo = pageNo;
      this.searchParams.offset = (pageNo - 1) * this.searchParams.limit;
      this.getData();
    },
    // 搜索框变化,搜索建议栏显示，重新发请求
    inputFunc: throttle(function () {
      if (this.searchParams.keywords !== "") {
        this.tipShow = true;
      } else {
        this.tipShow = false;
      }
      this.getSuggest();
    }, 50),
    // 发请求获取搜索建议
    getSuggest() {
      this.$store.dispatch("search/reqsearchSuggest", {
        keywords: this.searchParams.keywords,
      });
    },
  },
  watch: {
    //在search页面，通过头部的搜索栏搜索的情况，监听路由变化
    $route() {
      // 合并参数发请求
      Object.assign(this.searchParams, this.$route.query);
      this.getData();
    },
  },
  mounted() {
    this.getData();
    this.getSuggest();
  },
};
</script>

<style lang="less" scoped>
.body {
  background-color: #f9f9f9;

  .searchArea {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 26px;
    .searchBox {
      width: 310px;
      text-indent: 20px;
      height: 26px;
      border: 2px solid #c0c0c0;
      border-radius: 3px;
    }
    .button {
      position: absolute;
      left: 7px;
      top: 10px;
      cursor: pointer;
    }
    p {
      height: 25px;
      line-height: 25px;
      border-bottom: 1px solid #c0c0c0;
      text-indent: 15px;
    }
  }
  .suggest {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .index img {
    width: 26px;
    height: 26px;
  }

  .index ul {
    font-size: 12px;
    margin-top: 10px;
    display: flex;
    list-style: none;
    height: 30px;
    line-height: 30px;
    border-left: 1px solid #c0c0c0;
    border-right: 1px solid #c0c0c0;
    li {
      width: 200px;
      overflow-y: hidden;
      flex: 1;
      text-align: center;
      border-top: 2px solid #c0c0c0;
      border-bottom: 1px solid #c0c0c0;
      a:hover {
        text-decoration: none;
      }
    }
    li:hover {
      border-top: 2px solid rgb(197, 15, 15);
    }
    .current {
      background-color: white;
      border: 1px solid #c0c0c0;
      border-top: 2px solid rgb(197, 15, 15);
      border-bottom: white;
    }
  }
  .showArae {
    width: 600px;
    margin: 0 auto;
  }
}
</style>