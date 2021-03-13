<template>
  <v-app>

    <v-main>
      <inicio/>
  
    </v-main>

  </v-app>
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
