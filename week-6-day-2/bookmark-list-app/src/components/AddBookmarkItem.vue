<template>
  <div class="container">
    <div class="form-group mr-5">
      <input
        v-model="bookmarkItem.title"
        type="text"
        class="form-control"
        placeholder="title"
      />
    </div>
    <div class="form-group mr-5">
      <input
        v-model="bookmarkItem.description"
        type="text"
        class="form-control"
        placeholder="description"
      />
    </div>
    <div class="form-group mr-5">
      <input
        v-model="bookmarkItem.url"
        type="text"
        class="form-control"
        placeholder="url"
      />
    </div>
    <button class="btn-sm btn-primary" @click="onSave">Ekle</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bookmarkItem: {
        title: null,
        description: null,
        url: null,
      },
    };
  },
  methods: {
    onSave() {
      const userData = {
        ...this.bookmarkItem,
      };
      // const userData2 = JSON.parse(JSON.stringify(this.bookmarkItem));
      this.$store.dispatch("saveBookmark", userData);
      this.bookmarkItem = {
        title: null,
        description: null,
        url: null,
      };
    },
  },
};
</script>
