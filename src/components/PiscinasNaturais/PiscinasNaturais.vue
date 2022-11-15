<template>
    <ver-menos class="d-flex justify-content-end"></ver-menos>
    <div class="texto-ciano">
        <h2>Piscinas Naturais</h2>
    </div>
    <section class="piscinas-naturais text-center">
        <h3>Conheça uma das mais belas formações coralinas do planeta.</h3>
        <img class="img-fluid" src="../../../public/img/piscinas-naturais1.jpg" />
        <p>Em meio a tantos atributos naturais, uma atração se destaca e extasia os visitantes em Maragogi. 
        São os arrecifes de coral com flora e fauna riquíssimas, que na maré baixa formam belas piscinas naturais. 
        Estas formações coralinas integram a Área de Preservação Ambiental Costa dos Corais, 
        que se estende de Paripueira, em Alagoas, até Tamandaré, em Pernambuco.</p>
        <p>São 3 as áreas abertas a visitação: Galés, a quase 6 quilômetros do litoral, 
        Taocas e Barra Grande ao norte. Todas incrivelmente belas. A riqueza da fauna e 
        da flora local impressionam. Logo na chegada os visitantes, em um primeiro momento, 
        parecem não acreditar no que estão vivenciando. Passado o impacto inicial começam a 
        exploração do paraíso. Com snorkel e máscara de mergulho, a hora é de contemplação. 
        Observar as diversas espécies de seres marinhos é deslumbrante e relaxante.</p>
    </section>
    <section class="piscinas-naturais2">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>Reserve seus passeios as piscinas naturais com antecedência</h2>
                    <p v-for="d in dados" :key="d.id">
                        <span>{{d.traco}}</span>{{d.topico}}
                    </p>
                    <piscinas-naturais-precos/>
                </div>
                <div class="col-md-6">
                    <img src="../../../public/img/piscinas-naturais2.jpg" class="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    <botao-whats-app />
    
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import BotaoWhatsApp from '@/components/BotaoWhatsApp/BotaoWhatsApp.vue'
    import PiscinasNaturaisPrecos from '@/components/PiscinasNaturais/PiscinasNaturaisPrecos.vue'
    import VerMenos from '@/components/VerMenos/VerMenos.vue'
    export default {

        name: 'PiscinasNaturais',

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/textos_piscinas_naturais')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/textos_piscinas_naturais')
        },

        components: {
            BotaoWhatsApp,
            PiscinasNaturaisPrecos,
            VerMenos
        }

    }

</script>

<style lang="scss">
    @import 'PiscinasNaturais';
</style>