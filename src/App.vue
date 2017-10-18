<template>
  <div id="app">
     <my-header></my-header>
     <router-view></router-view>
     <!-- <my-footer></my-footer> -->
  </div>    
</template>

<script>
import MyHeader from 'components/include/header'
import MyFooter from 'components/include/footer'
export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
</style>
