<template>

  <!--Navbar da aplicação-->
  <Header></Header>
  <router-view /> <!--Rotas-->
  <Footer></Footer> <!--Footer da aplicação-->
  
</template>

<script>

  import Footer from '@/components/Footer/Footer.vue'
  import Header from '@/components/Header/Header.vue'

  export default {
    name: 'App',
    components: {
      Footer,
      Header
    }
  }

</script>

<style>

</style>
