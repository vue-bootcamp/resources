<template>
  <div class="bookmark-item">
    <div class="header">
      <h3>{{ bookmarkItem.title }}</h3>
      <button class="btn-sm btn-danger">Kaydı Sil</button>
    </div>
    <p class="mt-20 mb-20">{{ bookmarkItem.description }}</p>
    <div class="d-flex justify-content-between align-items-center">
      <button
        class="btn-primary btn-sm"
        @click="bookmarkItem.showLink = !bookmarkItem.showLink"
      >
        Göster
      </button>
      <a v-if="bookmarkItem.showLink" target="_blank" :href="bookmarkItem.url"
        >Link</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["bookmarkItem"],
};
</script>
