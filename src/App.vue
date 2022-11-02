<template>

  <!--Navbar da aplicação-->
  <Header></Header>
  <router-view /> <!--Rotas-->
</template>

<script>

  import Header from '@/components/Header/Header.vue'

  export default {
    name: 'App',

    data: () => ({
      exibirAlerta: false
    }),

    components: {
      Header
    }
  }

</script>

<style>
  
</style>
