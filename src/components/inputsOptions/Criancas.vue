<template>
    <option value=""></option>
    <option v-for="d in dados" :key="d.id" :value="d.id">
        {{d.quantidade}}
    </option>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    export default {
        name: 'Criancas',
        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/criancas')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/criancas')
        }
    }
</script>