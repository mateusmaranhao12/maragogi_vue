<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col">Passeio</th>
                <th scope="col">Preço</th>
            </tr>
            </thead>
            <tbody v-for="d in dados" :key="d.id">
            <tr>
                <td>{{d.passeio}}</td>
                <td>{{d.preco}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    export default {

        name: 'PiscinasNaturaisPrecos',

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/piscinas_naturais_precos')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/piscinas_naturais_precos')
        }

    }

</script>