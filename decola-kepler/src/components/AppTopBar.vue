<template>
  <div class="app-top-bar">
    <v-app-bar app color="pink lighten-3" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title> <p>Pascoa Acessível</p> </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="pink lighten-3">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/favoritos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Favoritos</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lista de locais</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>



<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap");

.app-top-bar a {
  font-family: "Sulphur Point";
  text-decoration: none;
}
p {
  font-family: "Sulphur Point";
  text-align: center;
  font-size: 25px;
}
</style>