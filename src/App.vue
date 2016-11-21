<template>
  <div>
    <nav-bar></nav-bar>
    <router-view class="child-view"></router-view>
    <transition :name="transitionName">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
      console.log(this.$store)
      const depth = route => route.path.split('/').length
      this.transitionName = depth(to) <= depth(from) ? 'slide-right' : 'slide-left'
    },
    data () {
      return {
        transitionName: 'slide-left',
      }
    },
  }
</script>
<style src="./App.css" scoped></style>
