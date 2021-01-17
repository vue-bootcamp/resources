<template>
  <div>
    <router-view name="appHeader" />
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("initApp");
    // this.$store.dispatch("categories/fetchCategories");
    // const cList = this.$store.getters["categories/_categoryList"];
    // console.log("cList", cList);
  }
};
</script>
