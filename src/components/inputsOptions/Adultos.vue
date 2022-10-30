<template>
    <label class="col-3 col-form-label texto-label">Quantidade de adultos:</label>
    <div class="col">
        <select class="form-select">
            <option value=""></option>
            <option v-for="d in dados" :key="d.id">
                {{d.quantidade}}
            </option>
        </select>
    </div>
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