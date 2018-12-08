<template>
  <header :class="{login:isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>let's share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>立即注册</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>let's share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li>
            <router-link to="my">我的</router-link>
          </li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import auth from '@/api/auth'

  window.auth = auth

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        'user',
        'isLogin'
      ])
    },
    created() {
      this.checkLogin()
      console.log(this.isLogin)
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout() {
        this.logout()
      }
    }
  };
</script>

<style lang="less" type="text/less">
  @import "../assets/base";

  header.no-login {
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 40px;
      margin: 60px 0 0 0;
      text-transform: uppercase;
    }

    p {
      margin: 15px 0 0 0;
      color: #fff;
    }

    .btns {
      margin-top: 20px;
    }

    button {
      //margin: 20px 5px 0;
    }
  }

  header.login {
    display: flex;
    align-items: center;
    background: @bgColor;

    h1 {
      color: #fff;
      font-size: 40px;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      flex: 1;
    }

    .edit {
      font-size: 30px;
      color: #fff;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
    }

    .user {
      position: relative;

      ul {
        display: none;
        position: absolute;
        right: 0;
        list-style: none;
        border: 1px solid #eaeaea;
        margin: 0;
        padding: 0;
        background-color: #fff;

        a {
          text-decoration: none;
          color: #333;
          font-size: 12px;
          display: block;
          padding: 5px 10px;

          &:hover {
            background-color: #eaeaea;
          }
        }
      }
      &:hover ul{
        display: block;
      }
    }
  }
</style>
