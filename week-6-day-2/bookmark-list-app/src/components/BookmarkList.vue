<template>
  <div class="container">
    <div class="bookmark--app--container">
      <bookmark-list-item
        :bookmark="bookmark"
        v-for="bookmark in bookmarkList"
        :key="bookmark.id"
      />
    </div>
  </div>
</template>

<script>
import BookmarkListItem from "@/components/BookmarkListItem";
import { mapGetters } from "vuex";
export default {
  components: {
    BookmarkListItem,
  },
  methods: {
    //   getBookmarkList(){
    //   }
  },
  computed: {
    // ...mapGetters(["getBookmarkList", "getSettings"]),
    ...mapGetters({
      bookmarkList: "getBookmarkList",
    }),
    // bookmarkList() {
    //   return this.$store.getters.getBookmarkList;
    // },
  },
};
</script>
