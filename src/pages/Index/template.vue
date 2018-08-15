<template>
  <div id="index">
    <p>首页</p>
    <div>
      <el-button @click="onClick1">默认按钮</el-button>
      <el-button type="info" @click="onClick2">信息按钮</el-button>
    </div>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
