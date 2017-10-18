<template>
  <header class="navbar">
    <div class="logo">
      <img src="../../common/image/logo.png" alt="领投者" class="img-responsive" />
    </div>
    <nav class="menu">
      <ul>
        <li v-for="(item,index) in navList" :key="item.index" @click="jump(index)">
          {{item.menu}}
          <img v-if="index==5" src=""></img>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      navList: [
        { menu: '首页' },
        { menu: '产品' },
        { menu: '服务' },
        { menu: '关于' },
        { menu: '下载' },
        { menu: '登录 / 注册' }
      ]
    }
  },
  methods: {
    jump(index) {
      if (index == 0) {
        this.$router.push({ name: 'start' });
      } else if (index == 1) {
        this.$router.push({ name: 'product' });
      } else if (index == 2) {
        this.$router.push({ name: 'serve' });
      } else if (index == 3) {
        this.$router.push({ name: 'about' });
      } else {
        this.$router.push({ name: 'download' });
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/styles/variable.styl';
header {
    width: 100%
    height: 70px
    position: fixed
    background: $nav-color
    .logo {
        position: fixed
        top: 9px
        left: 50px
    }
    ul {
        float: right
        padding-right: 100px
          >li {
              float: left
              color: $white
              height: 70px
              width: 110px
              text-align: center
              line-height: 70px
              cursor: pointer 
              &:hover {
                background: rgba(225, 225, 225, 0.15)
              }
        }
    }
    @media print screen and (max-width:1080px) {
      ul {
        float: right
        padding-right: 100px
          >li {
              color: $white
              height: 70px
              width: 110px
              text-align: center
              line-height: 70px
              cursor: pointer 
              &:hover {
                background: rgba(225, 225, 225, 0.15)
              }
        }
      }
    }
}
</style>
