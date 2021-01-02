<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 offset-4">
        <new-product-form />
        <product-list />
      </div>
    </div>
  </div>
</template>
<script>
import NewProductForm from "@/components/NewProductForm";
import ProductList from "@/components/ProductList";
export default {
  components: {
    NewProductForm,
    ProductList,
  },
};
</script>
