<template>
  <!-- FORM -->
  <div class="row">
    <div class="col-auto">
      <input v-model="productName" type="text" class="form-control" />
    </div>
    <div class="col-auto">
      <button @click="addProduct" type="submit" class="btn btn-primary mb-3">
        Ekle
      </button>
    </div>
  </div>
  <!-- /FORM -->
</template>
<script>
export default {
  data() {
    return {
      productName: null,
    };
  },
  methods: {
    addProduct() {
      this.$store.commit("addProduct", {
        id: new Date().getTime(),
        title: this.productName,
      });
    },
  },
};
</script>
