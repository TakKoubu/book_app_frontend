<template>
  <div>
    <BookPreview v-for="book in loadedBooks" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookPreview from "@/components/BookPreview";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    BookPreview,
  },
  created() {
    this.fetchBooks();
  },
  computed: {
    ...mapGetters(["loadedBooks"]),
  },
  methods: {
    ...mapActions(["fetchBooks"]),
  },
};
</script>
