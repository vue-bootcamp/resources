<template>
  <div>
    <h3>Ürün Listesi</h3>
    <ul class="list-group">
      <product-list-item />
    </ul>
    <small class="text-primary">{{ $store.getters.productResultBar }} </small>
  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem";
export default {
  components: {
    ProductListItem,
  },
};
</script>
