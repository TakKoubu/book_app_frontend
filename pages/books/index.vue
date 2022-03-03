<template>
  <section>
    <input v-model="query.name_or_author_or_publication_date_cont" />
    <select
      v-model="query.categories_id_in"
      name="category-form"
      class="select-multiple"
      multiple
    >
      <option
        v-for="category in loadedCategories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.id }}-{{ category.name }}
      </option>
    </select>
    <button @click="searchBook">Search</button>
    <BookPreview v-for="book in loadedBooks" :key="book.id" :book="book" />
  </section>
</template>

<script>
import BookPreview from "@/components/BookPreview";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Qs from "qs";

export default {
  data() {
    return {
      query: {
        name_cont_or_author_cont: "",
        categories_id_in: [],
      },
    };
  },
  components: {
    BookPreview,
  },
  created() {
    this.fetchBooks();
    this.fetchCategories();
  },
  computed: {
    ...mapGetters(["loadedBooks"]),
    ...mapGetters(["loadedCategories"]),
  },
  methods: {
    ...mapActions(["fetchBooks"]),
    ...mapActions(["fetchCategories"]),
    searchBook() {
      this.$store.dispatch("fetchBooks", {
        params: {
          q: this.query,
        },
        paramsSerializer(params) {
          return Qs.stringify(params, { arrayFormat: "brackets" });
        },
      });
    },
  },
};
</script>
