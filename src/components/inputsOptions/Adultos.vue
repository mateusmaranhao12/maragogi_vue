<template>
    <option value=""></option>
    <option v-for="d in dados" :key="d.id" :value="d.id">
        {{d.quantidade}}
    </option>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    export default {
        name: 'Adultos',
        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/adultos')
        }
    }
</script>