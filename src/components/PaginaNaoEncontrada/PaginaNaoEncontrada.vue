<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Opss!</h4>
                    <p>A página que você digitou não existe.</p>
                    <hr>
                    <button type="button" class="btn btn-danger" @click="$router.push('/')">Voltar para a página inicial</button>
                </div>
            </div>
        </div>
    </div>
</template>

