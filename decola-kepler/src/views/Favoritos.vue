<template>
  <div class="favorito">
    <h2>Favoritos</h2>
    <ul>
      <li v-for="favoritos of listaFavoritos" :key="favoritos.id">
        <v-img class="img mr-5" :src="favoritos.imagem" alt="favoritos.nome"/>
        <p>{{ favoritos.nome }} </p>        
        <p>{{ favoritos.sabor }} </p>
        <p>R$ {{ favoritos.preco }} </p>
        <p>{{ favoritos.local.nome }} </p>
        <p>Endereço: {{ favoritos.local.endereco }} </p>
        <p>{{ favoritos.local.cep }} <br><br></p>
      </li>
    </ul>
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
  margin-top: 25px;
  font-size: 30px;
}
p{
  font-family: "Sulphur Point";
  text-align: center;
  font-size: 15px;
}
</style>