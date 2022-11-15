<template>
    <div class="texto-azul">
        <h1>O que fazer em Maragogi</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <router-view></router-view> <!--Rota do respectivo botão clicado (Piscinas Naturais, Mergulho, etc)-->
            </div>
        </div>
    </div>
    <section class="o-que-fazer"><!--O que fazer-->
        <div class="container align-self-center"><!--Container-->
            <div class="row"> <!--Row-->
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div v-for="d in dados" :key="d.id" class="col">
                        <div class="card">
                        <img :src="`/img/${d.imagem}`" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">{{d.titulo}}</h5>
                            <p class="card-text">{{d.resumo}}</p>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <router-link v-if="d.id == 1" class="btn btn-card" type="button" to="/o-que-fazer/piscinas-naturais">Ver mais</router-link>
                                <router-link v-if="d.id == 2" class="btn btn-card" type="button" to="/o-que-fazer/mergulho">Ver mais</router-link>
                                <router-link v-if="d.id == 3" class="btn btn-card" type="button" to="/o-que-fazer/praia">Ver mais</router-link>
                                <router-link v-if="d.id == 4" class="btn btn-card" type="button" to="/o-que-fazer/passeios-de-buggy">Ver mais</router-link>
                                <router-link v-if="d.id == 5" class="btn btn-card" type="button" to="/o-que-fazer/passeios">Ver mais</router-link>
                                <router-link v-if="d.id == 6" class="btn btn-card" type="button" to="/o-que-fazer/bares-e-restaurantes">Ver mais</router-link>
                                <router-link v-if="d.id == 7" class="btn btn-card" type="button" to="/o-que-fazer/compras">Ver mais</router-link>
                                <router-link v-if="d.id == 8" class="btn btn-card" type="button" to="/o-que-fazer/noite">Ver mais</router-link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div> <!--Fim Row-->
        </div> <!--Fim Container-->
    </section><!--/O que fazer-->
    <Footer></Footer>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'oQueFazer',
        mixins: [ApiMixin],
        created() {
            this.getDadosApi('http://localhost:3000/o_que_fazer')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/o_que_fazer')
        },

        components: {
            Footer
        }
    }
</script>

<style lang="scss">
    @import 'oQueFazer';
</style>