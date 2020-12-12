const app = Vue.createApp({
  data() {
    return {
      title: null,
      description: null,
      url: null,
      searchText: "",
      bookmarkList: [],
    };
  },
  methods: {
    addBookmarkItem() {
      const bookmarkItem = {
        title: this.title,
        description: this.description,
        url: this.url,
        showLink: false,
        id: new Date().getTime(),
      };
      this.bookmarkList.push(bookmarkItem);
      this.title = null;
      this.description = null;
      this.url = null;
    },
    deleteBookmark(BOOKMARK_ID) {
      const willDelete = confirm("Bu kaydı gerçekten silmek istiyor musunuz?");
      if (willDelete) {
        const filteredList = this.bookmarkList.filter(
          (item) => item.id !== BOOKMARK_ID
        );
        this.bookmarkList = filteredList;
      }
    },
  },
  computed: {
    hasNoItem() {
      // if(typeof(this.bookmarkList) === "object"){}
      return this.bookmarkList.length === 0;
    },
    filteredBookmarkList() {
      return this.bookmarkList.filter(
        (item) =>
          item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          item.url.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  beforeCreate() {
    console.log("beforeCreate..");
  },
  created() {
    console.log("Created...");
    this.bookmarkList = [
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
    ];
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("Mounted...");
  },
  beforeUpdate() {
    console.log("beforeUpdate..");
  },
  updated() {
    console.log("Updated..");
  },
});

// app.component("app-bookmark-item", {});

app.mount("#app");
