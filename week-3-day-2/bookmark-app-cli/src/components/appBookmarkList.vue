<template>
  <div class="container">
    <div class="bookmark--app--container">
      <!-- props -->
      <!-- attribute binding.. v-bind:propName || :propName -->
      <app-bookmark-list-item
        v-for="bookmark_item in items"
        :key="bookmark_item.id"
        :item="bookmark_item"
        :yazar="author"
        :types="types"
      />
    </div>
  </div>
</template>
<script>
import appBookmarkListItem from "@/components/appBookmarkListItem";
export default {
  props: ["items"],
  components: {
    appBookmarkListItem,
  },
  data() {
    return {
      author: "Gökhan Kandemir",
      types: ["web", "development", "gaming", "testing"],
    };
  },
};
</script>
