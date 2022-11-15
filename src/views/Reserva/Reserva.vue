<template>
    <div class="texto-azul">
        <h1>Faça sua reserva agora mesmo!</h1>
    </div>

    <router-view v-if="etapa == 1" />
    
    <div class="formulario-reserva">
        <div class="container">
            <div class="row borda-formulario">
                <div class="col">
                    <label class="col-3 col-form-label texto-label">Nome: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Digite seu nome" id="name" v-model="form.nome">
                    <span v-if="!this.form.nome" class="text-danger" id="erro_nome"></span>
                </div>
                <div class="col">
                    <label class="col-3 col-form-label texto-label">Sobrenome: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Digite seu Sobrenome" id="lastname" v-model="form.sobrenome">
                    <span v-if="!this.form.sobrenome" class="text-danger" id="erro_sobrenome"></span>
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">Número de Telefone: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Número de telefone" v-model="form.telefone" id="phone" v-maska="'(##) #####-####'">
                    <span v-if="!this.form.telefone" class="text-danger" id="erro_telefone"></span>
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">E-mail: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="form.email" placeholder="Digite seu e-mail" id="email">
                    <span v-if="!this.form.email" class="text-danger" id="erro_email"></span>
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">CPF: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" v-model="form.cpf" placeholder="Digite seu CPF" id="cpf" v-maska="'###.###.###-##'">
                    <span v-if="!this.form.cpf" class="text-danger" id="erro_cpf"></span>
                </div>
                <div class="col-md-12">
                    <label class="col-3 col-form-label texto-label">Local que deseja se hospedar: <span class="text-danger">*</span></label>
                    <div class="col">
                        <select class="form-select" v-model="form.hospedagem" id="hospedagem">
                            <option value=""></option>
                            <option v-for="d in dados" :key="d.id">
                                {{d.hotel}}
                            </option>
                        </select>
                        <span v-if="!this.form.hospedagem" class="text-danger" id="erro_hospedagem"></span>
                    </div>
                    
                </div>
                <div class="col-6">
                    <label class="col-3 col-form-label texto-label">Check-in: <span class="text-danger">*</span></label>
                    <input type="date" class="form-control" v-model="form.checkin" id="checkin">
                    <span v-if="!this.form.checkin" class="text-danger" id="erro_checkin"></span>
                    <span v-if="this.form.checkin > this.form.checkout" id="data_invalida" class="text-danger text-center"></span>
                </div>
                <div class="col-6">
                    <label class="col-3 col-form-label texto-label">Check-out: <span class="text-danger">*</span></label>
                    <input type="date" class="form-control" v-model="form.checkout" id="checkout">
                    <span v-if="!this.form.checkout" class="text-danger" id="erro_checkout"></span>
                </div>
                
                <div class="col">
                    <label class="col-3 col-form-label texto-label">Quantidade de adultos: <span class="text-danger">*</span></label>
                    <div class="col">
                        <select class="form-select" id="adultos" v-model="form.adultos">
                            <adultos />
                        </select>
                        <span v-if="!this.form.adultos" class="text-danger" id="erro_adultos"></span>
                    </div>
                </div>
                <div class="col">
                    <label class="col-3 col-form-label texto-label">Quantidade de crianças: <span class="text-danger">*</span></label>
                    <div class="col">
                        <select class="form-select" id="criancas" v-model="form.criancas">
                            <criancas/>
                        </select>
                        <span v-if="!this.form.criancas" class="text-danger" id="erro_criancas"></span>
                    </div>
                </div>
                <div class="col-12">
                    <label class="col-3 col-form-label texto-label">Mais detalhes:</label>
                    <textarea class="form-control" rows="3" v-model="form.detalhes"></textarea>
                </div>
                <div class="mb-3 mt-3 row">
                    <div class="col d-flex justify-content-between">
                        <button class="btn btn-reserva" type="button" @click="validarFormulario()">Fazer reserva</button>
                    </div>                        
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>

    import Adultos from '@/components/inputsOptions/Adultos.vue'
    import ApiMixin from '@/mixins/ApiMixins'
    import Criancas from '@/components/inputsOptions/Criancas.vue'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'Reserva',

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/hospedagens')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/hospedagens')
        },

        components: {
            Adultos,
            Criancas,
            Footer
        },

        data: () => ({

            form: {},

            formEstadoInicial: {
                nome: '',
                sobrenome: '',
                telefone: '',
                email: '',
                cpf: '',
                hospedagem: '',
                checkin: '',
                checkout: '',
                adultos: '',
                criancas: '',
                detalhes: ''
            },

            etapa: 0
        }),

        methods: {

            validarFormulario() {
                
                if(!this.form.nome || 
                    !this.form.sobrenome ||  
                    !this.form.telefone ||  
                    !this.form.email ||  
                    !this.form.cpf ||  
                    !this.form.hospedagem ||  
                    !this.form.checkin ||  
                    !this.form.checkout ||
                    this.form.checkin > this.form.checkout ||
                    !this.form.adultos ||  
                    !this.form.criancas  
                    ) {
                        if(!this.form.nome) document.getElementById('erro_nome').innerHTML = 'Informe seu nome'
                        if(!this.form.sobrenome) document.getElementById('erro_sobrenome').innerHTML = 'Informe seu sobrenome'
                        if(!this.form.telefone) document.getElementById('erro_telefone').innerHTML = 'Informe seu número de telefone'
                        if(!this.form.email) document.getElementById('erro_email').innerHTML = 'Informe seu e-mail'
                        if(!this.form.cpf) document.getElementById('erro_cpf').innerHTML = 'Informe seu CPF'
                        if(!this.form.hospedagem) document.getElementById('erro_hospedagem').innerHTML = 'Informe o Hotel ou Resort que deseja se hospedar'
                        if(!this.form.checkin) document.getElementById('erro_checkin').innerHTML = 'Informe a data de Check-In'
                        if(!this.form.checkout) document.getElementById('erro_checkout').innerHTML = 'Informe a data de Check-out'
                        if(!this.form.adultos) document.getElementById('erro_adultos').innerHTML = 'Informe a quantidade de adultos'
                        if(!this.form.criancas) document.getElementById('erro_criancas').innerHTML = 'Informe a quantidade de crianças'
                        if(this.form.checkin > this.form.checkout) document.getElementById('data_invalida').innerHTML = 'Informe uma data válida'
                         
                    } 
                 
                else {
                    this.enviar()
                }
            },

            enviar() {

                //const formEnvio = Object.assign({}, this.form)
                //console.log(formEnvio)

                Object.assign({}, this.form)
                this.$router.push('/reserva/sucesso')

                //Requisição HTTP para o Back-end da aplicação
                //promise que vai nos permitir tomar ações se a requisição deu certo ou errado

                this.resetar()
                this.etapa = 1

                setTimeout(() => this.$router.push('/reserva'), 5000)
            },

            resetar() {
                this.form = Object.assign({}, this.formEstadoInicial)
                console.log('Resetado')
            }

        }
    }
</script>

<style lang="scss">
    @import 'Reserva';
</style>