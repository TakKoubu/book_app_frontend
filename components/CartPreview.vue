<template>
  <section>
    <p>本の名前{{ cart.book.name }}</p>
    <p>本の価格{{ cart.book.price }}</p>
    <p>消費税{{ consumptionTax(cart) }}</p>
    <p><input v-model="item_number" />冊</p>
    <p>{{ cart.book.stock }}</p>
    <p>合計額{{ taxIncludedPrice(cart) }}</p>
    <p>獲得ポイント{{ points(cart) }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      item_number: this.cart.item_number,
    };
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  name: "CartPreview",
  methods: {
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
  watch: {
    item_number(value) {
      if (value > this.cart.book.stock) {
        alert("在庫より多い数を選択しています。注文上限は在庫数分になります。");
        this.item_number = this.cart.book.stock;
      }
    },
  },
};
</script>
