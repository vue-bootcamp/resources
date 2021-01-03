<template>
  <div class="bookmark-item">
    <div class="header">
      <h3>{{ bookmark.title }}</h3>
      <button
        @click="deleteBookmark(bookmark.id)"
        v-if="settings.delete"
        class="btn-sm btn-danger"
      >
        Kaydı Sil
      </button>
    </div>
    <p class="mt-20 mb-20">{{ bookmark.description }}</p>
    <div class="d-flex justify-content-between align-items-center">
      <button v-if="settings.update" class="btn-warning btn-sm">Düzenle</button>
      <a :href="bookmark.url">Siteye Git</a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    bookmark: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteBookmark"]),
    // ...mapActions({
    //   sil : "deleteBookmark"
    // })
    // deleteBookmark() {
    //   this.$store.dispatch("deleteBookmark", this.bookmark.id);
    // },
  },
  computed: {
    ...mapGetters(["settings"]),
  },
};
</script>
