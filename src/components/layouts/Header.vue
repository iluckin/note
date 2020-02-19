<template>
    <div class="header">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <router-link to="/">
                        <img src="../../assets/images/logo.png" alt="logo" class="logo img-fluid img-thumbnail rounded-circle">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Jumbotron from "../home/Jumbotron";
    export default {
        name: 'note-header',
        components: {
            Jumbotron
        }
    }
</script>

<style>
    .logo {
        margin-top: 18px;
        width: 64px;
        height: 64px;
    }
    .social a img {
        width: 24px;
        height: 24px;
    }
    .jumbotron {
        background: none;
        padding: 0px !important;
    }

    .header-jumbotron {
        background: none !important;
    }
</style>