<template>
  <div>
    <CartPreview
      v-for="item in loadedCarts"
      :key="item.id"
      :item="item"
    ></CartPreview>
    <p>小計{{ sumOfBooks }}</p>
    <p>獲得ポイント合計{{ sumOfPoints }}</p>
    <button @click="buyBooks()">購入ボタン</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import CartPreview from "@/components/CartPreview";

export default {
  components: {
    CartPreview,
  },
  created() {
    this.fetchCarts();
  },
  methods: {
    ...mapActions(["fetchCarts"]),
    buyBooks() {
      const result = confirm("購入を完了させますか？");
      if (result) this.$store.dispatch("addOrders");
    },
  },
  computed: {
    ...mapGetters(["loadedCarts"]),
    ...mapState(["loadedCarts"]),
    sumOfBooks() {
      var sum = 0;
      this.loadedCarts.forEach((item) => {
        sum += Math.floor(item.book.price * 1.1) * item.item_number;
      });
      return sum;
    },
    sumOfPoints() {
      var sumOfPoints = 0;
      this.loadedCarts.forEach((item) => {
        sumOfPoints +=
          Math.floor(Math.floor(item.book.price * 1.1 ) * item.item_number * 0.1);
      });
      return sumOfPoints;
    },
  },
};
</script>
