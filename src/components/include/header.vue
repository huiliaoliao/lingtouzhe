<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img src="../../common/image/logo.png" alt="logo"/>
        </a>
        <ul class="nav navbar-nav navbar-right">
          <li class="animated zoomIn active">首页</li>
          <li class="animated zoomIn">
            <router-link to="/product">产品</router-link></li>
          <li class="animated zoomIn">服务</li>
          <li class="animated zoomIn">关于</li>
          <li class="animated zoomIn">下载</li>
          <li class="animated zoomIn">登录 / 注册</li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles/variable.styl';
  .navbar
    background: $nav-color
    height: 80px
    line-height 80px
    img
      line-height 80px
      padding-top 12px
      padding-left 50px
    ul
      float right
      padding-right 100px
    ul > li
      float left
      text-decoration none
      color $white
      height 80px
      width 110px
      text-align center
      font-size MicrosoftYaHei
      cursor pointer
    .active
      background rgba(225, 225, 225, 0.15)
</style>
