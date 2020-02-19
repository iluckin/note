<template>
  <div class="home container">
    <h5 class="my-2 mt-4">Newest Article</h5>
    <div class="section article-list my-4">
      <Article v-for="item in posts" :key="item.id" :item="item" />
    </div>
    <div v-show="postLoadingState" class="my-3 animated fadeIn"><vue-loading /></div>
    <div class="row my-4" v-show="hasNextPage">
      <div class="col text-center" v-show="!postLoadingState" >
        <a @click="more" class="btn btn-sm btn-light text-muted more" title="more">
          <feather name="chevrons-right" />
        </a>
      </div>
    </div>
    <div class="row my-4" v-show="! hasNextPage">
      <div class="col text-center">
        <a class="btn btn-sm btn-light text-muted more mx-2" @click="refresh" title="refresh">
          <feather name="refresh-ccw" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Article from "../components/article/Article";
    import Subscribe from "../components/Subscribe"

    export default {
        components: {
            Article,
            Subscribe
        },
        methods: {
            refresh() {
              this.$store.dispatch('refresh')
            },
            more() {
              this.$store.dispatch('fetchOriginPosts', {
                category: 100, keyword: 'Nice'
              })
            }
        },
        computed: {
            ...mapGetters(['posts', 'postLoadingState', 'hasNextPage'])
        },
        created () {
            this.$store.dispatch('fetchOriginPosts')
        }
    }
</script>
