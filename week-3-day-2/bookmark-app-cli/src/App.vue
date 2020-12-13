<template>
  <div>
    <header>Bookmark App</header>
    <appBookmarkList :items="bookmarkData" />
  </div>
</template>
<script>
import appBookmarkList from "@/components/appBookmarkList";
export default {
  components: {
    appBookmarkList,
  },
  data() {
    return {
      bookmarkData: [
        {
          id: 1,
          title: "Bookmark 1",
          description: "Bu güzel bir bookmark..",
          url: "https://www.videosinif.com",
          showLink: false,
        },
        {
          id: 2,
          title: "Bookmark 2",
          description: "Bu güzel bir bookmark.. 2",
          url: "https://www.google.com",
          showLink: false,
        },
        {
          id: 3,
          title: "Bookmark 3",
          description: "Bu güzel bir bookmark.. 3",
          url: "https://www.kodluyoruz.org",
          showLink: false,
        },
        {
          id: 4,
          title: "Bookmark 4",
          description: "Bu güzel bir bookmark.. 4. Canım bookmark",
          url: "https://www.kablosuzkedi.com",
          showLink: false,
        },
      ],
    };
  },
};
</script>
