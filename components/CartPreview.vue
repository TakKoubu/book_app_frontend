<template>
  <section>
    <p>本の名前{{ item.book.name }}</p>
    <p>本の価格{{ item.book.price }}</p>
    <p>消費税{{ consumptionTax(item) }}</p>
    <p><input v-model="itemNumber" @change="updateCart(item)" />冊</p>
    <p>合計額{{ taxIncludedPrice(item) }}</p>
    <p>獲得ポイント{{ points(item) }}</p>
    <button @click="deleteItem(item.id)">削除</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      itemNumber: this.item.item_number,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  name: "CartPreview",
  methods: {
    consumptionTax(item) {
      return Math.floor(item.book.price * 0.1);
    },
    taxIncludedPrice(item) {
      return Math.floor(item.book.price * 1.1) * this.itemNumber;
    },
    points(item) {
      return Math.floor(Math.floor(item.book.price * 1.1 ) * this.itemNumber * 0.1);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id).then(() => {
        this.$router.push("/confirmation");
      });
    },
    updateCart(item) {
      this.$store
        .dispatch("updateCart", { id: item.id, itemNumber: this.itemNumber })
    },
  },
  watch: {
    itemNumber(value) {
      if (value > this.item.book.stock) {
        alert("在庫より多い数を選択しています。注文上限は在庫数分になります。");
        this.itemNumber = this.item.book.stock;
      }
    },
  },
};
</script>
