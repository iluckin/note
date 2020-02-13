<template>
    <div class="row d-flex post-item-box post-item align-content-center py-2 mb-1 animated fadeIn delay-0.3s" v-bind:class="{ 'top': item.top === true }">
        <div @click="show(item.id)" class="col col-1 post-cover-box align-content-between">
<!--            <img v-lazy="item.avatar" class="post-cover  img-fluid mt-3 pl-1" alt="">-->
            <img src="../../assets/images/001.png" class="post-cover  img-fluid mt-3 pl-1" alt="">
        </div>
        <div class="col-7 pt-1" @click="show(item.id)">
            <svg v-show="item.top" t="1581478391467" class="icon mr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19458" width="20" height="20"><path d="M336.944 462.224l10.688 39.872c6.688 24.928 13.952 48.096 22.384 69.6l-0.736 0.208c-12.784-17.696-28.512-37.536-42.208-51.744l-40.48-44.448-53.12 14.24 45.024 168 41.12-11.04-11.072-41.376a1416.816 1416.816 0 0 0-21.856-74.56l1.008-0.272c13.376 18.064 30.432 37.792 44.416 53.024l43.616 48.16 47.36-12.688-45.024-168-41.12 11.024z m644.256-76.112l-118.688-76.704-7.088-141.12-141.136-7.088-76.704-118.688-125.76 64.432-125.776-64.432-76.704 118.688-141.152 7.088-7.072 141.12-118.704 76.704 64.448 125.76-64.448 125.776 118.704 76.704 7.072 141.12 141.152 7.088 76.704 118.688 125.76-64.432 125.76 64.432 76.72-118.688 141.136-7.088 7.088-141.12 118.688-76.704-64.432-125.76 64.432-125.776z m-104.192 223.616l-92.352 59.68-5.504 109.808-109.808 5.504-59.68 92.336-97.856-50.128-97.856 50.128-59.68-92.336-109.792-5.504-5.52-109.808-92.352-59.68 50.128-97.856-50.128-97.84 92.352-59.68 5.52-109.808 109.792-5.504 59.68-92.352 97.856 50.144 97.856-50.144 59.68 92.352 109.792 5.504 5.52 109.808 92.352 59.68-50.128 97.84 50.128 97.856z m-387.52-47.872l-8.272-30.912 60.32-16.16-9.744-36.384-60.32 16.16-7.2-26.912 64.064-17.184-9.904-36.88-109.168 29.248 45.024 168 112.64-30.176-9.872-36.896-67.552 18.096z m219.92-199.44l6.528 64.24c2.352 20.736 4.64 41.232 7.216 60.848l-0.48 0.128a1564 1564 0 0 0-22.4-53.6l-27.76-61.728-48.096 12.88 5.76 64.432c1.824 21.696 3.728 42.816 6.08 62.512l-0.496 0.128c-7.184-16.8-16.112-38.176-24.32-56.8l-26.4-59.728-48.368 12.96 83.664 157.648 49.84-13.36-4.928-69.2c-0.944-15.504-2.96-32.064-5.52-52.496l0.512-0.128a904.88 904.88 0 0 0 20.48 48.48l28.832 62.8 49.104-13.152-3.648-179.088-45.6 12.224z" fill="#d81e06" p-id="19459"></path></svg>
            <a class="font-weight-bold text-dark">{{ item.title }}</a>
            <p class="mt-1 mb-0 font-weight-light small text-muted">
                <feather name="tag" /> {{ item.content }}
            </p>
            <p class="mt-1 mb-0 font-weight-light small text-muted">
                Published: {{ item.createdAt }}
            </p>
        </div>

        <div class="col-2 text-center pt-4">
            <a class="btn btn-sm btn-light border-1">{{ item.category }}</a>
        </div>
        <div class="col-2 post-statistics text-right pt-4">
            <feather name="eye" class="text-secondary"/><a class="small mx-1">{{ item.view }} </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'post-item',
        props: ['item'],
        methods: {
            show (id) {
                this.$router.push({
                    path: '/article/' + id
                })
            }
        }
    }
</script>

<style>
    .post-item {
        border-radius: 3px;
    }

    .post-item:hover {
        cursor:pointer;
    }
    .post-item:hover {
        background-color: #eaf0f8;
    }
    .post-cover-box {
        width: 70px !important;
    }
    .post-cover {
        width: 64px;
        height: 64px;
    }
    .post-tags {
        text-align: left;
        justify-content: space-between;
    }
    .post-tags .badge {
        margin: 24px 3px 0px 3px;
    }

    .post-statistics ul li {
        border: none;
        background: none;
    }

    .post-statistics ul {
        float: right;
    }
    .top {
        background-color: #FFFADC;
    }
</style>