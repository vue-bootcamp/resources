<template>
  <div>
    <header>Bookmark App</header>
    <add-bookmark-item />
    <bookmark-list />
  </div>
</template>

<script>
import BookmarkList from "@/components/BookmarkList";
import AddBookmarkItem from "@/components/AddBookmarkItem";
import axios from "axios";

export default {
  components: {
    BookmarkList,
    AddBookmarkItem,
  },
  created() {
    // this.$store.commit("fillBookmarks"); -> Mutations
    this.$store.dispatch("initApp"); // actions
    // axios
    //   .get("http://localhost:3000/bookmarks")
    //   .then((bookmarkList_response) => {
    //     console.log("bookmarkList_response", bookmarkList_response);
    //     this.$store.commit("fillBookmarks", bookmarkList_response.data || []);
    //   });
  },
};
</script>
