<template>
    <section class="secao_whatsapp">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="text-success d-flex justify-content-center">Agende seu passeio conosco agora mesmo!</h3>
                </div>
                <div class="col-md-6 d-flex justify-content-center">
                    <button class="btn btn-success " @click="abrirLinkWhatsApp()">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'BotaoWhatsApp',

        methods: {
            abrirLinkWhatsApp() {
                window.open('https://wa.link/73a7uy')
            }
        }
    }

</script>