<template>
  <nav id="nav" class="navbar navbar-default">
    <div class="container">
      <div class="footer-footer-main">
        <div class="row">
          <ul class="col-xs-10">
            <li v-for="list in liList">
              <a href=""> {{ list.li }} </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-social">
        <a href="#">
          <img src="../../common/image/start/weChat.png" alt="">
        </a>
        <a href="#">
          <img src="../../common/image/start/microblog.png" alt="">
        </a>
      </div>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        liList: [
          {li: '移动端111111111111'},
          {li: '首页'},
          {li: '产品'},
          {li: '服务'},
          {li: '下载'},
          {li: '关于'}
        ],
        bottomList: [
          {li: '京 ICP 备11017824号-4&nbsp;|&nbsp;京 ICP 备11017824号-4'},
          {li: '京 ICP 备11017824号-4&nbsp;|&nbsp;京 ICP 备11017824号-4'},
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles/variable.styl';
  .navbar
    background $nav-background

  .footer-main
    height: 80px
    line-height 80px
    border-bottom: 1px solid $nav-color
    min-width 400px

  .footer-social
    height: 80px
    line-height 80px
    min-width 360
    padding 20px auto

  ul
    display flex
    flex-direction row
  ul li
    float left
  a > img
    margin-right 36px
  a
    color #fff
    font-size 14px
    padding 0 10px
</style>
