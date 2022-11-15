<template>
    <h4>Telefones</h4>
    <div v-for="d in dados" :key="d.id">
        <p><span style="font-weight: bold; color: black;">{{d.contato}}: </span>{{d.numero}}</p>
    </div>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    export default {
        name: 'Telefones',
        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/telefones')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/telefones')
        }
    }
</script>