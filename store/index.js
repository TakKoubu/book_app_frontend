import Vuex from 'vuex'

const url = "http://localhost:5000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedBooks: [],
      loadedCategories: [],
      book: '',
      cart: []
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
      },
      addCart(state, cart) {
        state.cart = cart
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
      addCart({commit}, {id, itemNumber}){
        return this.$axios
        .post(`${url}/carts`, { cart: { book_id: id, item_number: itemNumber }})
        .then((res) => {
          commit('addCart', res.data)
        })
      }
    },
    getters: {
      loadedBooks(state){
        return state.loadedBooks;
      },
      loadedCategories(state){
        return state.loadedCategories;
      },
      addedBooks(state){
        return state.cart
      }
    }
  })
}

export default createStore
