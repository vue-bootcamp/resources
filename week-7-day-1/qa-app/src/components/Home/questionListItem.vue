<template>
  <div class="card text-left mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ question.title }}</h5>
      <div class="mt-3">
        <p class="text-muted">
          {{ question.details }}
        </p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="custom-text-light">
            <i class="fa fa-user-circle me-1"></i>
            {{ timesAgo(question.created_at) }}
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
          <small class="text-dark">4 Cevap</small>
        </span>
        <span class="custom-seperator"> | </span>
        <small class="custom-text-light"> 2 gün önce </small>
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
  }
};
</script>
