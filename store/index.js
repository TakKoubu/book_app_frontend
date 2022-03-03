import Vuex from 'vuex'

const url = "http://localhost:5000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedBooks: [],
    },
    mutations: {
      setBooks(state, books){
        state.loadedBooks = books;
      }
    },
    actions: {
      fetchBooks({ commit }, params){
        return this.$axios
        .get(`${url}/books`, params)
        .then((res) => {
          commit('setBooks', res.data)
        })
        .catch((e) => console.log(e))
      }
    },
    getters: {
      loadedBooks(state){
        return state.loadedBooks;
      }
    }
  })
}

export default createStore
