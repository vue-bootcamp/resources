<template>
  <div class="row my-3">
    <div class="col-6 product_item border offset-3 p-3">
      <h3>{{ name }} - (#{{ productId }})</h3>
      <p class="text-muted">
        {{ description }}
      </p>
      <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-danger btn-sm" @click="deleteEvent">Sil</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "description", "productId"],
  methods: {
    deleteEvent() {
      this.$emit("product-delete-event", this.productId);
    },
  },
};
</script>
