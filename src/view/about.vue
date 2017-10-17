<template>
  <div class="start" @click="pathTo">
    我是关于
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

</style>
