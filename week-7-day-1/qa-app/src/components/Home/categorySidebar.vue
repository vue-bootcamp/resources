<template>
  <div class="col-2">
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
        class="list-group-item list-group-item-action"
        aria-current="true"
        @click.prevent="$emit('category-select-event', category.id)"
      >
        <i
          class="fa fa-hashtag custom-text-light me-2"
          :class="{ [textColor(index)]: true }"
        ></i>
        <span> {{ category.title }} </span>
      </a>
    </div>
  </div>
</template>
<script>
import { appAxios } from "@/utils/securedAxios";
export default {
  emits: ["category-select-event"],
  data() {
    return {
      categories: [],
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
    appAxios.get("/categories").then(category_response => {
      this.categories = category_response.data || [];
    });
  },
  methods: {
    textColor(index) {
      return this.colors[index % this.colors.length];
    }
  }
};
</script>
