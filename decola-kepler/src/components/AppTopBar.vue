<template>
    <div class="app-top-bar">
      <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>  <p>Páscoa Acessível</p> </v-toolbar-title>
    </v-app-bar>

        <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="group" active-class="green--text text--lighten-2">
        
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-heart-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lista de locais</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
    
</template>



<script>
export default {
    name:'AppTopBar',
     data: () => ({
    drawer: false,
      group: null,
  }),
}
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap");
 p{
   

  font-family: "Sulphur Point";

  text-align: center;

  font-size: 25px;


 }

</style>