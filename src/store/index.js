import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {
      postApi: "https://api.blog.iluckin.cn/articles?limit=24&page=",
      categoryApi: "https://api.blog.iluckin.cn/categories"
    },
    posts: {
      items: [],
      page: 1,
      limit: 6,
      hasNext: false,
      loading: false
    },
    categories: []
  },
  getters: {
    posts (state) {
      return state.posts.items
    },
    postLoadingState (state) {
      return state.posts.loading
    },
    hasNextPage (state) {
      return state.posts.hasNext
    },
    cate (state) {
      return state.categories
    } 
  },
  mutations: {
    setPosts (state, posts, flush) {
      flush = flush || false
      posts.map(post => flush ? state.posts.items = posts : state.posts.items.push(post))
    }
  },
  actions: {
    refresh({state}) {
      state.posts.items = []
      state.posts.page = 1
      this.dispatch('fetchOriginPosts')
    },
    async fetchOriginPosts ({ state, commit }, where) {
      where = where || {category: 0, title: ''}
      console.info('search', where)

      let page = state.posts.page
      state.posts.loading = true
      await fetch(state.api.postApi + page)
          .then(r => r.json())
          .then(res => {
            state.posts.page += res.data.hasNext === true ? 1 : 0
            res.data.items.length ? commit('setPosts', res.data.items) : ''
            state.posts.loading = false
            state.posts.hasNext = res.data.hasNext
          })
    },
    async fetchCategory ({ state }) {
      await fetch(state.api.categoryApi)
          .then(r => r.json())
          .then(items => {
            state.categories = items.data
          })
    },
    preload () {
      this.dispatch('fetchCategory')
      this.dispatch('fetchOriginPosts')
    }
  }
})
