<template>
    <ver-menos class="d-flex justify-content-end"></ver-menos>
    <div class="texto-ciano">
        <h2>Mergulho</h2>
    </div>
    <section class="mergulho">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-fluid" src="../../../public/img/mergulho1.jpg" />
                </div>
                <div class="col-md-6">
                    <h3>Venha fazer um mergulho inesquecível em Maragogi</h3>
                    <p>Maragogi tem vários pontos interessantes para mergulho.
                    Através das águas calmas, mornas e cristalinas 
                    é possível observar a riqueza da fauna e flora que habitam os bancos de corais. 
                    Na região também espalham-se vários naufrágios.</p>
                </div>
                <div class="col-md-6">
                    <p style="margin-top: 6rem;">São realizados dois tipos de mergulho: O batismo, para quem não tem experiência, 
                    e o credenciado, para os experientes, com cursos específicos.</p>
                    <p>O mergulho de batismo pode ser feito por qualquer pessoa, mesmo crianças. 
                    Os mergulhadores fazem testes de pré-mergulho, antes da saída para o mar. 
                    Esse tipo de mergulho é feito nas piscinas naturais a profundidade máxima de 6m. 
                    Mergulhadores conduzem e orientam durante o mergulho, que tem a duração de cerca de 20 minutos. 
                    O mergulho credenciado pode ser realizado em cabeços (formações rochosas) ou em naufrágios 
                    (Maragogi tem dois naufrágios, um a 32m de profundidade e outro a 12m). 
                    Para realização desse mergulho é necessário que o interessado seja credenciado em escola 
                    de mergulho profissional.</p>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="../../../public/img/mergulho2.jpg" />
                </div>
            </div>
        </div>
    </section>
    <section><!--Mergulho Grids-->
        <div class="container mergulho-grids">
            <div class="row">

                <div class="col-md-6 col-xl-4">
                    <img src="../../../public/img/mergulho3.jpg" class="img-fluid">
                </div>
        
                <div class="marcador col-md-6 col-xl-4">
                    <img src="../../../public/img/mergulho4.jpg" class="img-fluid">
                </div>
                <div class="marcador col-md-6 col-xl-4">
                    <img src="../../../public/img/mergulho5.jpg" class="img-fluid">
                </div>
        
            </div>
        </div> 
    </section><!--/Mergulho Grids-->

    <botao-whats-app />
</template>

<style lang="scss">
    @import 'Mergulho';
</style>

<script>

    import BotaoWhatsApp from '@/components/BotaoWhatsApp/BotaoWhatsApp.vue'
    import VerMenos from '@/components/VerMenos/VerMenos.vue'
    export default {

        name: 'Mergulho',

        components: {
            BotaoWhatsApp,
            VerMenos
        }

    }

</script>