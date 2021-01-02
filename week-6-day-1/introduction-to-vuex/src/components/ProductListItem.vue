<template>
  <div>
    <li
      v-for="product in $store.getters.productList"
      :key="product.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>{{ product.title }}</span>
      <button @click="deleteProduct(product.id)" class="btn btn-sm btn-danger">
        Sil
      </button>
    </li>
  </div>
</template>

<script>
export default {
  methods: {
    deleteProduct(id) {
      this.$store.commit("deleteProduct", id);
    },
  },
};
</script>
