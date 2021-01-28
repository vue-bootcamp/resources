<template>
  <div class="card text-left mb-3 ms-1 w-100">
    <div class="card-body">
      <div class="mt-3">
        <p class="text-muted" v-html="comment.details"></p>
      </div>
    </div>
    <div
      class="card-footer text-muted py-2 question-footer d-flex justify-content-between align-items-center"
    >
      <div class="custom-text-light">
        <i class="fa fa-user-circle me-1"></i>
        {{ timesAgo(comment.created_at) }}
        cevapladı
      </div>
      <div v-if="currentUser !== null" class="question-action-container">
        <a
          v-if="!alreadyLiked"
          href="#"
          @click.prevent="likeComment"
          class="like-btn text-muted me-2"
        >
          <i
            :class="{ 'text-success': alreadyLiked }"
            class="fa fa-thumbs-up"
          ></i>
          ({{ comment.likes.length }})
        </a>
        <span v-else class="me-2">
          <i
            :class="{ 'text-success': alreadyLiked }"
            class="fa fa-thumbs-up"
          ></i>
          ({{ comment.likes.length }})
        </span>
        <a
          href="#"
          @click.prevent="
            dislike({ commentId: comment.id, userId: currentUser.id })
          "
          class="dislike-btn text-muted"
        >
          <i class="fa fa-thumbs-down"></i> ({{ comment.dislikes.length }})
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import helperMixin from "@/utils/helperMixin";
import { mapActions, mapGetters } from "vuex";
export default {
  mixins: [helperMixin],
  props: ["comment"],
  methods: {
    ...mapActions({
      like: "likes/like",
      dislike: "likes/dislike"
    }),
    likeComment() {
      // if(this.currentUser.id === )
      this.$store.dispatch("likes/like", {
        commentId: this.comment.id,
        userId: this.currentUser.id
      });
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser"
    }),
    alreadyLiked() {
      return Boolean(
        this.comment?.likes?.find(l => l.userId === this.currentUser.id)
      );
    }
  }
};
</script>
