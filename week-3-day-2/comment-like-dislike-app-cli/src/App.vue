<template>
  <div>
    <header>Comment Like/Dislike App</header>
    <div class="container">
      <input
        type="text"
        placeholder="search a comment.."
        v-model="search_text"
        @keydown.enter="searchComments"
      />
    </div>
    <div class="container">
      <input
        type="text"
        placeholder="comment.."
        v-model="comment_text"
        @keydown.enter="addComment"
      />
    </div>
    <div class="container">
      <div class="comment--like--dislike--app">
        <div
          v-for="item in filteredComments"
          :key="item"
          class="card mb-10 comment--item"
        >
          <p>
            {{ item.comment }}
          </p>
          <div class="action--button--container text-right mt-10">
            <button @click="item.like++" class="btn-sm btn-success mr-5">
              Beğendim ({{ item.like }})
            </button>
            <button @click="item.dislike++" class="btn-sm btn-danger">
              Beğenmedim ({{ item.dislike }})
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_text: "",
      comment_text: "",
      comments: [
        {
          comment: "Deneme 1",
          like: 0,
          dislike: 0,
        },
        {
          comment: "yok abi çalismiyor..",
          like: 10,
          dislike: 2,
        },
        {
          comment: "süper ama puanım 1",
          like: 100,
          dislike: 50,
        },
        {
          comment: "bu topraklardaki en iyi yorumdu bu abi...",
          like: 10000,
          dislike: 0,
        },
        {
          comment: "buralar değerlenir rez alalım..",
          like: 100000,
          dislike: 10,
        },
      ],
    };
  },
  methods: {
    addComment() {
      const comment_item = {
        comment: this.comment_text,
        like: 0,
        dislike: 0,
      };

      this.comments.push(comment_item);

      this.comment_text = null;
    },
  },
  computed: {
    filteredComments() {
      return this.comments.filter((item) =>
        item.comment.toLowerCase().includes(this.search_text.toLowerCase())
      );
    },
  },
};
</script>
