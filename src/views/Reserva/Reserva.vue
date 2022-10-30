<template>
    <div class="texto-azul">
        <h1>Faça sua reserva agora mesmo!</h1>
    </div>
    <div class="formulario-reserva">
        <div class="container">
            <div class="row borda-formulario">
                <div class="col">
                    <label class="col-3 col-form-label texto-label">Nome:</label>
                    <input type="text" class="form-control" placeholder="Digite seu nome" id="name">
                </div>
                <div class="col">
                    <label class="col-3 col-form-label texto-label">Sobrenome:</label>
                    <input type="text" class="form-control" placeholder="Digite seu Sobrenome" id="lastname">
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">Número de Telefone:</label>
                    <input type="text" class="form-control" placeholder="Número de telefone" id="phone" v-maska="'(##) #####-####'">
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">E-mail:</label>
                    <input type="text" class="form-control" placeholder="Digite seu e-mail" id="email">
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">CPF:</label>
                    <input type="text" class="form-control" placeholder="Digite seu CPF" id="cpf" v-maska="'###.###.###-##'">
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">Local que deseja se hospedar:</label>
                    <div class="col">
                        <select class="form-select">
                            <option value=""></option>
                            <option v-for="d in dados" :key="d.id">
                                {{d.hotel}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-6">
                    <label class="col-3 col-form-label texto-label">Check-in:</label>
                    <input type="date" class="form-control">
                </div>
                <div class="col-6">
                    <label class="col-3 col-form-label texto-label">Check-out:</label>
                    <input type="date" class="form-control">
                </div>
                <div class="col">
                    <adultos/>
                </div>
                <div class="col">
                    <criancas />
                </div>
                <div class="col-12">
                    <label class="col-3 col-form-label texto-label">Mais detalhes:</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3 mt-3 row">
                    <div class="col d-flex justify-content-between">
                        <button class="btn btn-reserva" type="button">Fazer reserva</button>
                    </div>                        
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>

    import Adultos from '@/components/inputsOptions/Adultos.vue'
    import Criancas from '@/components/inputsOptions/Criancas.vue'
    import ApiMixin from '@/mixins/ApiMixins'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'Reserva',

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/hospedagens')
        },

        components: {
            Adultos,
            Criancas,
            Footer
        }
    }
</script>

<style lang="scss">
    @import 'Reserva';
</style>