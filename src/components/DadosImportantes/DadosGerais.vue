<template>
    <h4>Dados gerais</h4>
    <div v-for="d in dados" :key="d.id">
        <p><span style="font-weight: bold; color: black;">{{d.pergunta}}:</span> {{d.resposta}}</p>
    </div>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    export default {
        name: 'DadosGerais',
        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/dados_gerais')
        }
    }
</script>