<template>
  <div>
    <p>題名-{{ book.name }}</p>
    <p>著者-{{ book.author }}</p>
    <p>出版日-{{ book.publication_date }}</p>
    <p>価格-{{ book.price }}</p>
    <p>在庫-{{ book.stock }}</p>
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
