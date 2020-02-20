<template>
    <div class="jumbotron-box">
        <div class="jumbotron jumbotron-fluid home-jumbotron">
            <div class="container text-center">
                <h3 class="my-4 primary">Hello !</h3>
                <p>Record some substantial production technology and <br/> basic subject content for better production</p>
                <p class="social">
                    <a class="btn-link lead mx-2 " href="https://github.com/iluckin" target="_blank">
                        <img src="../../assets/images/github.svg" alt="github">
                    </a>
                    <a class="btn-link lead mx-2 wechat">
                        <img src="../../assets/images/wechat.svg" alt="wechat">
                    </a>
                    <span class="qr-box shadow-sm img-fluid">
                        <img src="../../assets/images/qr.jpg" alt="">
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Jumbotron',
        components: {}
    }
</script>

<style>
    .jumbotron-box {
        border-bottom: 0.09rem solid #f5f5f5;
    }
    .social a img {
        width: 22px;
        height: 22px;
    }
    .jumbotron {
        background: none;
        padding: 0px !important;
    }
    .home-jumbotron {
        background: none !important;
    }
    .wechat:hover {
        cursor: pointer;
    }

    .wechat:hover + .qr-box {
        display: inline-block;
    }

    .qr-box {
        position: absolute;
        top: 225px;
        display: none;
    }
    .qr-box img {
        width: 76px;
        height: 76px;
    }
</style>