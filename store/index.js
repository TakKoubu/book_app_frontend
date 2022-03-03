import Vuex from 'vuex'

const url = "http://localhost:5000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedBooks: [],
      loadedCategories: [],
      book: ''
    },
    mutations: {
      setBooks(state, books){
        state.loadedBooks = books;
      },
      setCategories(state, categories){
        state.loadedCategories = categories
      },
      setBook(state, book){
        state.book = book
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
      },
      fetchCategories({ commit }){
        return this.$axios
        .get(`${url}/categories`)
        .then((res) => {
          commit('setCategories', res.data)
        })
        .catch((e) => console.log(e))
      },
      fetchBook({ commit }, id){
        return this.$axios
        .get(`${url}/books/${id}`)
        .then((res) => {
          commit('setBook', res.data)
        })
        .catch((e) => console.log(e))
      },
    },
    getters: {
      loadedBooks(state){
        return state.loadedBooks;
      },
      loadedCategories(state){
        return state.loadedCategories;
      }
    }
  })
}

export default createStore
