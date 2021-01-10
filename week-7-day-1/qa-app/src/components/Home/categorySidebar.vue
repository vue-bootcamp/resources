<template>
  <div class="col-2">
    <!-- <pre>
      {{ selectedCategories }}
    </pre> -->
    <div class="d-grid gap-2 mb-3">
      <router-link
        to="/new"
        class="btn btn-primary d-flex justify-content-between align-items-center"
      >
        <span>Soru Sor</span>
        <i class="fa fa-edit"></i>
      </router-link>
    </div>
    <div class="list-group">
      <a
        v-for="(category, index) in categories"
        :key="category.id"
        href="#"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category-item"
        :class="{ active: category.selected }"
        aria-current="true"
        @click.prevent="category.selected = !category.selected"
      >
        <div>
          <i
            class="fa fa-hashtag custom-text-light me-2"
            :class="{ [textColor(index)]: true }"
          ></i>
          <span> {{ category.title }} </span>
        </div>
        <i v-if="category.selected" class="check-icon fa fa-check-circle"></i>
      </a>
      <!-- <a
        v-for="(category, index) in categories"
        :key="category.id"
        href="#"
        class="list-group-item list-group-item-action"
        :class="{
          active: Boolean(selectedCategories.find(c => c.id === category.id))
        }"
        aria-current="true"
        @click.prevent="
          $store.commit('categories/addToSelectedCategories', category)
        "
      >
        <i
          class="fa fa-hashtag custom-text-light me-2"
          :class="{ [textColor(index)]: true }"
        ></i>
        <span> {{ category.title }} </span>
      </a> -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  emits: ["category-select-event"],
  data() {
    return {
      colors: [
        "text-primary",
        "text-secondary",
        "text-danger",
        "text-info",
        "text-warning",
        "text-success",
        "text-dark",
        "text-muted"
      ]
    };
  },
  created() {
    // this.$store.dispatch("categories/fetchCategories");
  },
  methods: {
    textColor(index) {
      // 0......7-0..........7-0...........7
      return this.colors[index % this.colors.length];
    }
  },
  computed: {
    ...mapGetters({
      categories: "categories/_categoryList",
      selectedCategories: "categories/_selectedCategoryList"
    })
  },
  watch: {
    categories: {
      deep: true,
      handler(categories) {
        this.$store.dispatch("questions/fetchQuestions", categories);
      }
    }
  }
};
</script>
