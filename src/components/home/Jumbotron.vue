<template>
    <div class="shadow-sm jumbotron-box">
        <div class="jumbotron jumbotron-fluid home-jumbotron">
            <div class="container text-center">
                <h3 class="my-4">Hello !</h3>
                <p>Record some substantial production technology and <br/> basic subject content for better production</p>
                <p class="social">
                    <a class="btn-link lead mx-2 " href="https://github.com/iluckin" target="_blank">
                        <img src="../../assets/images/github.svg" alt="github">
                    </a>
                    <a class="btn-link lead mx-2" href="https://github.com/iluckin" target="_blank">
                        <img src="../../assets/images/wechat.svg" alt="wechat">
                    </a>
                </p>

                <div class="ad">
                    <a href="https://www.vultr.com/?ref=8356631" target="_blank">
                        <img src="https://www.vultr.com/media/banners/banner_468x60.png" height="60">
                    </a>
                </div>
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
        border-bottom: 0.01rem solid #f5f5f5;
    }
    .social a img {
        width: 24px;
        height: 24px;
    }
    .jumbotron {
        background: none;
        padding: 0px !important;
    }

    .home-jumbotron {
        background: none !important;
    }
</style>