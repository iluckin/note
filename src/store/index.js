import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {
      postApi: "https://5e4250cef6128600148ad2ea.mockapi.io/mock/article?limit=12&p="
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
    setPosts (state, posts) {
      posts.map(post => state.posts.items.push(post))
    }
  },
  actions: {
    async fetchOriginPosts ({ state, commit }) {
      let page = state.posts.page
      state.posts.loading = true
      if (state.posts.items.length > 0 && state.posts.hasNext) {
        page += 1
      }
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
