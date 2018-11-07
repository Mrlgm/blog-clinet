<template>
  <header :class="{login:isLogin, 'no-login': !isLogin}">
    <template  v-if="!isLogin">
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
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    };
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
}
</style>
