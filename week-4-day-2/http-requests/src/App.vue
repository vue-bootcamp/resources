<template>
  <div class="container">
    <h3 class="text-center mt-3">Comment App with Axios</h3>
    <div class="row mt-3">
      <div class="col-6 offset-3">
        <div class="list-group">
          <a
            v-for="comment in comments"
            :key="comment.id"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ comment.name }}</h5>
              <small>#{{ comment.id }}</small>
            </div>
            <p class="mb-1">
              {{ comment.body }}
            </p>
            <div class="d-flex w-100 justify-content-between">
              <small>{{ comment.email }}</small>
              <a href="#" @click="deleteItem(comment.id)" class="text-danger"
                >Delete</a
              >
            </div>
          </a>
        </div>
        <!-- <pre>
          {{ comment_list }}
        </pre> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      comments: [],
      baseURL: "https://api.spacexdata.com/v4",
    };
  },
  methods: {
    deleteItem(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then((delete_response) => {
          console.log("Delete response", delete_response);
          this.comments = this.comments.filter((c) => c.id !== id);
        });
    },
  },
  created() {
    // GET, POST, PUT, PATCH, DELETE, ...

    // axios.get(`${this.baseURL}/crew`).then((capsules_response) => {
    //   console.log("Capsules", capsules_response);
    // });
    // return false;
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     console.log("response", response.data);
    //     this.comments = response.data.filter((c) => c.id <= 10);
    //   })
    //   .catch((e) => {
    //     console.log("e", e);
    //   });
    axios
      .get("http://localhost:3000/bookmarks")
      .then((response) => {
        console.log("response", response);
        // this.comments = response.data.filter((c) => c.id <= 10);
      })
      .catch((e) => {
        console.log("e", e);
      });
  },
};
</script>
