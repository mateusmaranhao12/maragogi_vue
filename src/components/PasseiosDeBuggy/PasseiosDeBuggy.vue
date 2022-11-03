<template>
    <ver-menos class="d-flex justify-content-end" />
    <div class="texto-ciano">
        <h2>Passeios de Buggy</h2>
    </div>

    <section class="passeios-de-buggy">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>Passeios de Buggy por Maragogi, a melhor forma de curtir a região</h3>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="../../../public/img/buggy1.jpeg" />
                </div>
                <div class="col-md-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus justo sapien, pulvinar et laoreet nec, sodales ut nisi. 
                    Pellentesque lobortis mattis augue eu convallis. Morbi vitae 
                    dolor egestas, finibus ex feugiat, feugiat ex. Donec maximus 
                    placerat malesuada. Phasellus ipsum metus, commodo non 
                    auctor sed, pretium vel tortor. 
                    Vivamus eu odio vitae urna malesuada finibus. 
                    Mauris odio diam, bibendum quis neque at, auctor 
                    vehicula turpis.</p>
                    <p>Curabitur eu semper ante, nec tempus nisi. Nulla vel eleifend nulla. 
                    Ut aliquam, orci et pretium suscipit, ante elit malesuada ex, ut euismod nisl dui non ipsum. 
                    Ut ultrices aliquam est, in finibus elit fringilla in. Integer et imperdiet ipsum. 
                    Quisque eleifend nunc sed diam finibus varius. Fusce rhoncus non odio at porttitor. 
                    Aliquam vitae massa ut ex convallis lobortis. Maecenas at velit euismod, efficitur erat ut, luctus felis. 
                    Aenean facilisis, ligula quis suscipit luctus, ex urna sagittis velit, sed faucibus ipsum orci vel lacus.</p>
                </div>
            </div>
        </div>
    </section>

    <botao-whats-app />
</template>

<script>

    import BotaoWhatsApp from '@/components/BotaoWhatsApp/BotaoWhatsApp.vue'
    import VerMenos from '@/components/VerMenos/VerMenos.vue'
    export default {

        name: 'PasseiosDeBuggy',

        components: {
            BotaoWhatsApp,
            VerMenos
        }

    }

</script>

<style lang="scss">
    @import 'PasseiosDeBuggy';
</style>