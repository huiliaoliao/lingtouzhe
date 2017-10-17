<template>
  <!--<div class="navbar navbar-default navbar-fixed-top">-->
    <!--<div class="container">-->
      <!--&lt;!&ndash;<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myCollapse">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="icon-bar"></span>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="icon-bar"></span>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="icon-bar"></span>&ndash;&gt;-->
      <!--&lt;!&ndash;</button>&ndash;&gt;-->
      <!--<img src="../../common/image/logo.png" alt="logo"/>-->
      <!--<div class="collapse navbar-collapse" id="myCollapse">-->
        <!--<ul class="nav navbar-nav navbar-right">-->
          <!--<li class="animated zoomIn">首页</li>-->
          <!--<li class="animated zoomIn">产品</li>-->
          <!--<li class="animated zoomIn">服务</li>-->
          <!--<li class="animated zoomIn">关于</li>-->
          <!--<li class="animated zoomIn">下载</li>-->
          <!--<li class="animated zoomIn">登录 / 注册</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img src="../../common/image/logo.png" alt="logo"/>
        </a>
        <ul class="nav navbar-nav navbar-right">
          <li class="animated zoomIn active">首页</li>
          <li class="animated zoomIn">产品</li>
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
    ul
      float right
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
