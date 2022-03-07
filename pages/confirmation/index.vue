<template>
  <div>
    <div v-for="cart in loadedCarts" :key="cart.id">
      <p>本の名前{{ cart.book.name }}</p>
      <p>本の価格{{ cart.book.price }}</p>
      <p>消費税{{ consumptionTax(cart) }}</p>
      <p>{{ cart.item_number }}冊</p>
      <p>合計額{{ taxIncludedPrice(cart) }}</p>
      <p>獲得ポイント{{ points(cart) }}</p>
      <br />
    </div>
    <p>小計{{ sumOfBooks }}</p>
    <p>獲得ポイント合計{{ sumOfPoints }}</p>
    <button>購入ボタン</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  created() {
    this.fetchCarts();
  },
  methods: {
    ...mapActions(["fetchCarts"]),
    consumptionTax(cart) {
      return Math.floor(cart.book.price * 0.1);
    },
    taxIncludedPrice(cart) {
      return Math.floor(cart.book.price * 1.1) * cart.item_number;
    },
    points(cart) {
      return Math.floor(cart.book.price * 1.1 * 0.1) * cart.item_number;
    },
  },
  computed: {
    ...mapGetters(["loadedCarts"]),
    sumOfBooks() {
      var sum = 0;
      this.loadedCarts.forEach((cart) => {
        sum += Math.floor(cart.book.price * 1.1) * cart.item_number;
      });
      return sum;
    },
    sumOfPoints() {
      var sumOfPoints = 0;
      this.loadedCarts.forEach((row) => {
        sumOfPoints += Math.floor(row.book.price * 1.1 * 0.1) * row.item_number;
      });
      return sumOfPoints;
    },
  },
};
</script>
