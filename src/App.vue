<template>
  <div>
    <nav-bar></nav-bar>
    <transition :name="transitionName">
    <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    watch: {
      $route (to, from) {
        const depth = route => route.path.split('/').length
        this.transitionName = depth(to) <= depth(from) ? 'slide-right' : 'slide-left'
      },
    },
    data () {
      return {
        transitionName: 'slide-left',
      }
    },
  };
  </script>

  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
  </style>
