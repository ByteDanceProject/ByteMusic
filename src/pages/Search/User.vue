<template>
  <div class="user">
    <!-- 用户
    <div>{{ userprofiles }}</div> -->
    <ul>
      <li v-for="(user, index) in userprofiles" :key="user.userid">
        <div class="avatar">
          <img :src="user.avatarUrl" alt="" />
        </div>
        <div class="name hidden">
          <span class="nickname">
            <router-link to="/artists"
              >{{ user.nickname }}
              <div v-if="user.avatarDetail">
                <img :src="user.avatarDetail.identityIconUrl" alt="" />
              </div>
            </router-link>
            <i v-if="user.gender == 1" class="el-icon-male"></i>
            <i v-else="user.gender == 0" class="el-icon-female"></i>
          </span>
          <br />
          <p class="signatures" v-if="user.signature">
            {{ user.signature }}
          </p>
        </div>
        <div class="pick">
          <div class="button">
            <i class="el-icon-plus"></i>
            <input type="button" value="关注" />
          </div>
        </div>
        <div class="list hidden">歌单：1</div>
        <div class="fans hidden">粉丝：100000</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 用户
  name: "User",
  computed: {
    ...mapState({
      userprofiles: (state) => state.search.searchResult.userprofiles,
    }),
  },
};
</script>

<style lang="less" scoped>
.user {
  ul {
    margin: 5px 0;
    li {
      border: 1px solid white;
      display: flex;
      padding: 5px 0;
      height: 30px;
      div {
        margin: 0 5px;
        display: inline-block;
      }

      img {
        width: 30px;
        height: 30px;
      }
      .name {
        width: 50%;

        .nickname {
          img {
            width: 10px;
            height: 10px;
            margin-top: -3px;
          }
        }
        .signatures {
          font-size: 3px;
        }
      }
      .pick {
        .button {
          padding: 0 2px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #c0c0c0;
          border-radius: 2px;
          cursor: pointer;
        }
      }
      .list,
      .fans,
      .pick {
        line-height: 30px;
        width: 15%;
      }
    }
    li:hover {
      border: 1px solid #c0c0c0;
    }
  }
  // 超出隐藏
  .hidden {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>