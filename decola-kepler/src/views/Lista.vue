<template>
    <div class="listacompleta">
        <h2 class="text-h5 text-center mb-3 mt-5">Lista de Opções</h2>
        <ul class="listaopcoes">
            <li v-for="lista of listaCompleta" :key="lista.id">

                    <v-img class="img"
                    :src="lista.imagem" 
                    alt="lista.nome"/>
                <p>{{ lista.nome }}</p>
                <p>{{ "Sabor: " + lista.sabor }}</p>
                <p>{{ "R$ " + lista.preco }}</p>
                <p>{{ lista.local.nome }}</p>
                <p>{{ "Endereço: " + lista.local.endereco }}</p>
                <p>{{ "CEP: " + lista.local.cep }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Lista',
  data() {
      return {
          listaCompleta: []
      }
  },

  created() {
    fetch('https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(response => response.json())
      .then(json => {
        this.listaCompleta = json;

      })
  }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap");

h2 {
    font-family: "Sulphur Point";
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
}
p {
    font-family: "Sulphur Point";
    font-size: 15px;
    margin: 2px;
    text-align: center;
}

li {
    margin-bottom: 20px;
}

</style>
