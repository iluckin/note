import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {
      postApi: "https://5e4250cef6128600148ad2ea.mockapi.io/mock/article?limit=24&p="
    },
    posts: {
      items: [],
      page: 1,
      limit: 12,
      hasNext: true,
      loading: false
    }
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
      where = where || {category: 0, keyword: ''}
      console.info('search', where)

      let page = state.posts.page
      state.posts.loading = true
      await fetch(state.api.postApi + page)
          .then(r => r.json())
          .then(items => {
            state.posts.page += (items.length ? 1 : 0)
            items.length ? commit('setPosts', items) : ''
            state.posts.loading = false
            state.posts.hasNext = items.length && items.length >= state.posts.limit
          })
    }
  }
})
