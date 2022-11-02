<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Reservado com sucesso!</h4>
                    <p>Sua vaga no respectivo hotel / resort foi reservada com sucesso</p>
                    <hr>
                    <button type="button" class="btn btn-success" @click="$router.push('/')">Voltar para a página inicial</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Sucesso'
    }
</script>