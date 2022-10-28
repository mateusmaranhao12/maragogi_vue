<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-site">
            <router-link class="navbar-brand" to="/"><img src="../../../public/img/logo.png"></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><i class="fa-sharp fa-solid fa-house"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/maragogi" class="nav-link"> Maragogi</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/historia" class="nav-link"> História</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/o-que-fazer" class="nav-link"> O que fazer</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/reserva" class="nav-link"> Reserva</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import 'Header';
</style>