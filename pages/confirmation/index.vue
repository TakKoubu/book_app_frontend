<template>
  <div>
    <CartPreview
      v-for="cart in loadedCarts"
      :key="cart.id"
      :cart="cart"
    ></CartPreview>
    <p>小計{{ sumOfBooks }}</p>
    <p>獲得ポイント合計{{ sumOfPoints }}</p>
    <button>購入ボタン</button>
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
  data() {
    return {
      item_number: "",
    };
  },
  created() {
    this.fetchCarts();
  },
  methods: {
    ...mapActions(["fetchCarts"]),
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
