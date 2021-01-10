<template>
  <div v-if="isLoaded" class="container question-detail-page">
    <div class="row mt-3">
      <div class="col-10 offset-1">
        <div class="card text-left mb-3">
          <div class="card-body">
            <h3 class="card-title">{{ question.title }}</h3>
            <div class="mt-3">
              <p class="text-muted">
                {{ question.details }}
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                  {{ timesAgo(question.created_at) }} sordu
                </div>
                <div class="custom-text-light">
                  {{ question.category.title || "-" }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="card-footer text-muted py-3 question-footer flex-column d-flex justify-content-between align-items-center"
          >
            <!-- CEVAPLAR-->
            <template class="w-100" v-if="question.comments.length > 0">
              <div
                v-for="comment in question.comments"
                :key="comment.id"
                class="card text-left mb-3 ms-1 w-100"
              >
                <div class="card-body">
                  <div class="mt-3">
                    <p class="text-muted">
                      {{ comment.details }}
                    </p>
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
                  <div class="question-action-container">
                    <a href="#" class="like-btn text-muted me-2">
                      <i class="fa fa-thumbs-up"></i> (2)
                    </a>
                    <a href="#" class="dislike-btn text-muted">
                      <i class="fa fa-thumbs-down"></i> (3)
                    </a>
                  </div>
                </div>
              </div>
            </template>

            <div v-else class="alert alert-primary w-100" role="alert">
              Bu Soruya ait bir cevap bulunamadı.
            </div>
            <!-- !CEVAPLAR-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-loading v-else></app-loading>
</template>
<script>
import { appAxios } from "@/utils/securedAxios";
import helperMixin from "@/utils/helperMixin";
export default {
  mixins: [helperMixin],
  data() {
    return {
      question: null,
      isLoaded: false
    };
  },
  created() {
    appAxios
      .get(
        `/questions/${this.$route.params.id}?_expand=category&_embed=comments`
      )
      .then(question_response => {
        console.log("question_response", question_response);
        setTimeout(() => {
          this.question = question_response?.data || null;
          this.isLoaded = true;
        }, 750);
      });
  }
};
</script>
