<template>
  <div>
    <p>{{ book.image }}</p>
    <p>題名-{{ book.name }}</p>
    <p>著者-{{ book.author }}</p>
    <p>出版日-{{ book.publication_date }}</p>
    <p>価格-{{ book.price }}</p>
    <p v-if="book.stock === 0">在庫なし</p>
    <p v-else>在庫-{{ book.stock }}</p>
    <br />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async asyncData({ store, route }) {
    store.dispatch("fetchBook", route.params.id);
  },
  computed: {
    ...mapState(["book"]),
  },
};
</script>
