<template>
  <div class="item-container">
    <div class="item-info">
      <p>{{ book.image }}</p>
      <p>題名-{{ book.name }}</p>
      <p>著者-{{ book.author }}</p>
      <p>出版日-{{ book.publication_date }}</p>
      <p>価格-{{ book.price }}</p>
      <p v-if="book.stock === 0">在庫なし</p>
      <p v-else>在庫-{{ book.stock }}</p>
      <br />
    </div>
    <div class="cart-container">
      <span>数量</span>
      <select name="quantity" v-model="itemNumber">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button @click="addCart(book, itemNumber)">カートに入れる</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      itemNumber: "",
    };
  },
  async asyncData({ store, route }) {
    store.dispatch("fetchBook", route.params.id);
  },
  computed: {
    ...mapState(["book"]),
  },
  methods: {
    addCart(book, itemNumber) {
      this.$store
        .dispatch("addCart", { id: book.id, itemNumber: itemNumber })
        .then(() => {
          this.$router.push("/confirmation");
        });
    },
  },
};
</script>

<style scoped>
.item-info {
  display: inline-block;
  width: 45%;
}
.cart-container {
  display: inline-block;
  width: 50%;
}
</style>
