<template>
  <div class="card text-left mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ question.title }}</h5>
      <div class="mt-3">
        <p class="text-muted" v-html="question.details"></p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="custom-text-light">
            <i class="fa fa-user-circle me-1"></i>
            {{ timesAgo(question.created_at) }} sordu
          </div>
          <div class="custom-text-light">{{ question.category.title }}</div>
        </div>
      </div>
    </div>
    <div
      class="card-footer text-muted py-3 question-footer d-flex justify-content-between align-items-center"
    >
      <div>
        <span class="comment-container">
          <i class="custom-text-light fa fa-user-circle me-1"></i>
          <small class="text-dark">{{ answerCount }} </small>
        </span>
        <span v-if="commentsAvailable" class="custom-seperator"> | </span>
        <small v-if="commentsAvailable" class="custom-text-light">
          {{ lastCommentDate }}</small
        >
      </div>
      <router-link
        class="btn-sm btn btn-primary"
        :to="`/question/${question.id}`"
      >
        Soruyu görüntüle</router-link
      >
    </div>
  </div>
</template>
<script>
import helperMixin from "@/utils/helperMixin";

export default {
  mixins: [helperMixin],
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  computed: {
    answerCount() {
      const count = this.question.comments?.length || 0;
      return count > 0 ? `${count} cevap` : "Cevap Yok";
    },
    commentsAvailable() {
      return this.question.comments?.length > 0;
    },
    lastCommentDate() {
      if (this.commentsAvailable) {
        const created_at = this.question?.comments[
          this.question?.comments.length - 1
        ]?.created_at;
        return `${this.timesAgo(created_at)} cevaplandı` || "-";
      } else {
        return "-";
      }
    }
  }
};
</script>
