<template>
  <div class="bookmark-item">
    <div class="header">
      <h3>{{ item.title }}</h3>
      <button class="btn-sm btn-danger">Kaydı Sil</button>
    </div>
    <p class="mt-20 mb-20">{{ item.description }}</p>
    <p class="mt-20 mb-20">{{ yazar }}</p>
    <p class="mt-20 mb-20">{{ types }}</p>
    <ul>
      <li v-for="type in types">{{ type }}</li>
    </ul>
    <!-- <span v-for="item in types"> {{ item }}</span> -->

    <button class="btn-primary btn-sm">Göster</button>
  </div>
</template>
<script>
export default {
  props: ["item", "yazar", "types"],
  created() {
    console.log("this.item", this.item);
  },
};
</script>
