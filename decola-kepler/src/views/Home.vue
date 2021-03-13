<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Lista/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Lista from '@/views/Lista.vue'//excluir antes de colocar no github junto com Lista em todos os lugares que inseri*

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Lista//excluir antes de colocar no github
  }
}
</script>
