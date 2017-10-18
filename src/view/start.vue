<template style="height: 100%;">
  <div class="start" @click="pathTo">
    我是  首页
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      pathTo() {
        this.$router.push('/Product')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../common/styles/variable.styl';
.start
  color: $color-background
</style>
