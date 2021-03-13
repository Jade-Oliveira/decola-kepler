<template>
  <div id="app">
    <AppTopBar/>
    <Inicio/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/favoritos">Favoritos</router-link>
    </div>
    <router-view/>
  </div>
</template>

  


<script>
import Inicio from "./views/Inicio.vue";

export default {
  name: "App",
  components: {
    Inicio,
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>

<script>
import AppTopBar from './components/AppTopBar'

export default {
  name: 'App',
  components: {
    AppTopBar
  },
};
</script>

