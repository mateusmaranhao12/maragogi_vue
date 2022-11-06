<template>

  <!--Navbar da aplicação-->
  <Header></Header> <!--Header da aplicação-->
  <router-view /> <!--Rotas-->
</template>

<script>

  import Header from '@/components/Header/Header.vue'

  export default {
    name: 'App',

    components: {
      Header
    }
  }

</script>

<style>
  
</style>
