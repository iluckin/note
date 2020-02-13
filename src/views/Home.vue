<template>
  <div class="home container">
    <h5 class="my-2 font-weight-bold ml-0 pl-0">Newest Posts</h5>
    <div class="section article-list my-4">
      <Article v-for="item in posts" :key="item.id" :item="item" />
    </div>
    <div v-show="postLoadingState" class="my-3 animated fadeIn"><vue-loading /></div>
    <div class="row my-4" v-show="hasNextPage">
      <div class="col text-center" v-show="!postLoadingState" >
        <a @click="more" class="btn btn-sm btn-light text-muted more">
          <span >load more ···</span>
        </a>
      </div>
    </div>
    <div class="row my-4" v-show="! hasNextPage">
      <div class="col text-center">
        <a href="#app" class="btn btn-sm btn-light text-muted more">
          <span>back to top</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Article from "../components/article/Article";

    export default {
        components: {
            Article
        },
        methods: {
            more() {
              this.$store.dispatch('fetchOriginPosts')
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
