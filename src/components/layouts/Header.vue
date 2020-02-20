<template>
    <div class="header">
        <div class="dev">
            <div class="dev-link">
                <a class="text-decoration-none " href="https://dev.iluckin.cn" target="_blank">dev.iluckin.cn</a>
            </div>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <router-link to="/">
                        <img src="../../assets/images/machine-logo.svg" alt="logo" class="logo img-fluid">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'note-header'
    }
</script>

<style>
    .header {
        position: relative;
    }
    .logo {
        margin-top: 18px;
        width: 84px;
        height: 84px;
    }
    .dev {
        z-index: 10;
        position: absolute;
        background-color: #007a5a;
        right: -45px;
        top: 21px;
        padding: 0px 35px;
        -moz-transform:rotate(45deg);
        -webkit-transform:rotate(45deg);
    }
    .dev-link a {
        color: white !important;
        font-size: 0.80rem;
    }
    .dev-link a:hover {
        color: #e5e5e5 !important;
    }
</style>