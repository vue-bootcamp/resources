<template>
  <div>
    <div v-if="isLoaded" class="container question-detail-page">
      <div class="row mt-3">
        <div class="col-10 offset-1">
          <div class="card text-left mb-3">
            <div class="card-body">
              <div
                class="d-flex justify-content-between align-items-center w-100"
              >
                <h3 class="card-title">{{ question.title }}</h3>
                <span>
                  <a
                    v-if="!editQuestion"
                    href="#"
                    @click.prevent="editQuestion = true"
                    class="btn btn-link text-primary"
                  >
                    <i class="fa fa-edit"></i> Düzenle
                  </a>
                </span>
              </div>
              <div class="mt-3">
                <div v-if="editQuestion" class="form-group mb-3">
                  <quill-editor v-model:value="updatedQuestion" />
                  <div
                    v-if="editQuestion"
                    class="button-action-container mt-2 d-flex justify-content-end align-items-center"
                  >
                    <button
                      class="btn btn-sm btn-secondary me-1"
                      @click="editQuestion = false"
                    >
                      İptal
                    </button>
                    <button
                      class="btn btn-sm btn-primary"
                      @click="updateQuestion"
                    >
                      Düzenle
                    </button>
                  </div>
                </div>

                <p v-else class="text-muted" v-html="question.details"></p>

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
              class="card-footer text-muted py-3 question-footer flex-column d-flex justify-content-between align-items-center w-100"
            >
              <!-- CEVAPLAR-->
              <!-- Cevap Yaz Bölümü -->
              <div class="answerArea w-100 mb-3">
                <div class="form-group w-100 mb-1">
                  <quill-editor v-model:value="answer" />
                </div>
                <div
                  v-if="answer"
                  class="d-flex justify-content-end align-items-center"
                >
                  <button @click="saveComment" class="btn btn-primary btn-sm">
                    Gönder
                  </button>
                </div>
              </div>
              <!-- /Cevap Yaz Bölümü -->

              <template v-if="question.comments.length > 0">
                <div
                  v-for="comment in question.comments"
                  :key="comment.id"
                  class="card text-left mb-3 ms-1 w-100"
                >
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
    <app-loading v-if="!isLoaded || loadingBarShow"></app-loading>
  </div>
</template>
<script>
import { appAxios } from "@/utils/securedAxios";
import helperMixin from "@/utils/helperMixin";
import { isArray } from "util";

export default {
  mixins: [helperMixin],
  data() {
    return {
      question: null,
      isLoaded: false,
      answer: "",
      loadingBarShow: false,
      editQuestion: false,
      updatedQuestion: null
    };
  },
  methods: {
    fetchQuestion() {
      appAxios
        .get(
          `/questions/${this.$route.params.id}?_expand=category&_embed=comments`
        )
        .then(question_response => {
          console.log("question_response", question_response);
          setTimeout(() => {
            this.question = question_response?.data || null;
            if (isArray(this.question?.comments)) {
              this.question.comments.sort(this.orderCreatedAtByASC);
            }
            this.isLoaded = true;
          }, 750);
        });
    },
    fetchComments() {
      this.loadingBarShow = true;
      appAxios
        .get(
          `/comments/?questionId=${this.$route.params.id}&_sort=created_at&_order=desc`
        )
        .then(comments_response => {
          setTimeout(() => {
            this.question.comments = comments_response?.data || [];
            this.loadingBarShow = false;
          }, 750);
        });
    },
    saveComment() {
      if (confirm("Cevabı göndermek istiyor musunuz balım?")) {
        this.loadingBarShow = true;
        const comment = {
          details: this.answer,
          created_at: new Date(),
          // questionId: parseInt(this.$route.params.id)
          questionId: +this.$route.params.id
        };

        appAxios.post("/comments", comment).then(new_comment_response => {
          console.log("new_comment_response :>> ", new_comment_response);
          this.answer = "";
          this.fetchComments();
        });
      }
    },
    updateQuestion() {
      if (confirm("Düzenlemek istediğinize emin misiniz?")) {
        appAxios
          .patch(`/questions/${this.$route.params.id}`, {
            details: this.updatedQuestion
          })
          .then(() => {
            this.question.details = this.updatedQuestion;
            this.editQuestion = false;
          });
      }
    }
  },
  created() {
    this.fetchQuestion();
  },
  watch: {
    editQuestion(editQuestion) {
      if (editQuestion) {
        this.updatedQuestion = this.question.details;
      } else {
        this.updatedQuestion = null;
      }
    }
  }
};
</script>
