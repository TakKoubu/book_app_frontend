<template>
  <div>
    <nuxt-link :to="`/book/${book.id}`">
      <p>{{ book.image }}</p>
      <p>題名-{{ book.name }}</p>
      <p>著者-{{ book.author }}</p>
      <p>出版日-{{ book.publication_date }}</p>
      <p>価格-{{ book.price }}</p>
      <p v-if="book.stock === 0">在庫なし</p>
      <p v-else>在庫-{{ book.stock }}</p>
      <br />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  name: "BookPreview",
};
</script>
