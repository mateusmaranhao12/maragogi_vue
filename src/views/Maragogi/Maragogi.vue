<template>
    <div class="texto-azul">
        <h1>Maragogi</h1>
    </div>
    <div class="localizacao">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Localização</h2>
                    <p>Maragogi fica no litoral norte de Alagoas, em plena Costa dos Corais. 
                    Fica equidistante cerca de 125 Km de Maceió e do Recife, tornando fácil 
                    o acesso a partir dessas duas importantes capitais do nordeste brasileiro. 
                    Delimita-se a leste com o Oceano atlântico, a oeste por Porto Calvo e Jacuípe, ao sul, 
                    pelo município de Japaratinga e ao norte pelo município pernambucano 
                    de São José da Coroa Grande.</p>
                    <img src="../../../public/img/local.jpg" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
    <div class="mapa-da-cidade">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>Mapa da cidade (Principais ruas)</h4>
                </div>
                <div class="col-md-6">
                    <div v-for="d in dados" :key="d.id">
                        <p>{{d.id}} ) {{d.rua}}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="../../../public/img/mapa-da-cidade.jpg">
                </div>
            </div>
        </div>
    </div>
    <div class="dados-gerais">
        <div class="container">
            <div class="row">
                <div class="col">
                    <dados-gerais />
                </div>
            </div>
        </div>
    </div>
    <div class="telefones">
        <div class="container">
            <div class="row">
                <div class="col">
                    <telefones />
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import DadosGerais from '@/components/DadosImportantes/DadosGerais'
    import Footer from '@/components/Footer/Footer.vue'
    import Telefones from '@/components/DadosImportantes/Telefones.vue'
    export default {
        name: 'Maragogi',
        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/ruas')
        },

        components: {
            DadosGerais,
            Telefones,
            Footer
        }
    }
</script>

<style lang="scss">
    @import 'Maragogi';
</style>