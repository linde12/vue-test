<template>
  <div v-md-theme="'default'">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleNav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">ahap</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="nav" @open="open" @close="open">
      <md-toolbar class="md-large">
        <img src="../assets/logo.png" />
        <h3 class="md-title">ahap</h3>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toggleNav">
          <router-link to="/music">
            <md-icon>library_music</md-icon><span>Library</span>
          </router-link>
        </md-list-item>
        <md-list-item @click="toggleNav">
          <router-link to="/music/favorites">
            <md-icon>favorite</md-icon><span>Favorites</span>
          </router-link>
        </md-list-item>
        <md-list-item @click="toggleNav">
          <router-link to="/settings">
            <md-icon>settings</md-icon><span>Settings</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar',
    methods: {
      open () {
        this.navOpen = true
      },
      close () {
        this.navOpen = false
      },
      toggleNav () {
        this.$refs.nav.toggle()
      },
    },
    data () {
      return {
        navOpen: true,
      }
    },
  };
</script>
