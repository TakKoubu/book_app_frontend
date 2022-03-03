<template>
  <div>
    <BookPreview v-for="book in loadedBooks" :key="book.id" :book="book" />
    {{ loadedBooks }}
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
    this.fetchBooks;
  },
  methods: {
    ...mapActions(["fetchBooks"]),
  },
  computed: {
    ...mapGetters(["loadedBooks"]),
  },
};
</script>
