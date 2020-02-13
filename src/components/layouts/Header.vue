<template>
    <div class="header">
        <div class="jumbotron jumbotron-fluid header-jumbotron">
            <div class="container text-center">
                <router-link to="/">
                    <img src="../../assets/images/logo.png" class="logo rounded-circle img-thumbnail" alt="">
                </router-link>
            </div>
            <div class="container text-center mt-3">
                <h3 class="my-4">Hello, World !</h3>
                <p>Record the growth path of full-stack engineers and commit to <br> the improvement of independent developers</p>
                <p class="social">
                    <a class="btn-link lead mx-2 " href="https://github.com/iluckin" target="_blank">
                        <img src="../../assets/images/github.svg" alt="github">
                    </a>
                    <a class="btn-link lead mx-2" href="https://github.com/iluckin" target="_blank">
                        <img src="../../assets/images/wechat.svg" alt="wechat">
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Subscribe from "../Subscribe";
    export default {
        name: 'note-header',
        components: {
            Subscribe
        }
    }
</script>

<style>
    .logo {
        margin-top: 18px;
        width: 84px;
        height: 84px;
    }

    .header {
        border-bottom: 0.01rem solid #f5f5f5;
        background-image: url("../../assets/images/bg.svg") !important;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
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