<template>
    <section class="conteudo-principal">
        <img class="img-fluid" src="../../../public/img/capa.png" />
        <h2>HÁ 32 ANOS DIVULGANDO ESTE PARAÍSO! Suas reservas com quem entende de Maragogi.</h2>
    </section>
    <section>
        <div class=" marcador-container grids">
            <div class="row">
        
                <div v-for="d in dados" :key="d.id" class="marcador col-md-6 col-xl-2">
                    <img class="img-fluid" :src="`/img/${d.imagem}`">
                    <h4>{{d.titulo}}</h4>
                    <p>{{d.resumo}}</p>
                    <button class="btn btn-grid">Leia mais</button>
                </div>
        
            </div>
        </div>  
    </section>
    <Footer></Footer>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'Home',
        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/atracoes_principais')
        },

        components: {
            Footer
        }
    }
</script>

<style lang="scss">
    @import 'Home';
</style>