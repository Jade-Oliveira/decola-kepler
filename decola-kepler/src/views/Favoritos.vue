<template>
  <div class="favorito">
    <h2>Favoritos</h2>
      <router-link to="/listaopcoes">
        <div class="imagem">
          <v-img
            class="img mb-1"
            :src="listaFavoritos[0].imagem"
            :alt="listaFavoritos[0].nome"
          />
        </div>
        <div class="imagem">
          <v-img
            class="img mb-1"
            :src="listaFavoritos[1].imagem"
            :alt="listaFavoritos[1].nome"
          />
          </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Favoritos',
  data(){
    return{
      listaFavoritos: []
    }
  },
  created() {
      fetch('https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(response => response.json())
      .then(json => {
        this.listaFavoritos = json
      })
  }   
}
</script>

<style scoped>
h2{
  font-family: "Sulphur Point";
  text-align: center;
  margin-top: 50px;
  font-size: 30px;
}
p{
  font-family: "Sulphur Point";
  text-align: center;
  font-size: 15px;
}

.imagem {
  margin-bottom: 50px;
}
</style>