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
                    v-if="currentUserID === question.userId && !editQuestion"
                    href="#"
                    @click.prevent="editQuestion = true"
                    class="btn btn-link text-primary pe-0"
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
                    {{
                      `${questionUserName}${timesAgo(
                        question.created_at
                      )} sordu`
                    }}
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
              <div v-if="currentUser !== null" class="answerArea w-100 mb-3">
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
                <app-comment-item
                  v-for="comment in question.comments"
                  :key="comment.id"
                  :comment="comment"
                />
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
  </div>
</template>
<script>
import { appAxios } from "@/utils/securedAxios";
import helperMixin from "@/utils/helperMixin";
// import { isArray } from "util";
import { mapGetters } from "vuex";
import appCommentItem from "@/components/appShared/appCommentItem";

export default {
  mixins: [helperMixin],
  components: {
    appCommentItem
  },
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
          `/questions/${this.$route.params.id}?_expand=category&_expand=user`
        )
        .then(question_response => {
          setTimeout(() => {
            this.question = question_response?.data || null;
            this.question.comments = [];
            this.fetchComments();
            // if (isArray(this.question?.comments)) {
            //   this.question.comments.sort(this.orderCreatedAtByASC);
            // }
            this.isLoaded = true;
          }, 0);
        });
    },
    fetchComments() {
      this.loadingBarShow = true;
      appAxios
        .get(
          `/comments/?questionId=${this.$route.params.id}&_embed=likes&_embed=dislikes&_sort=created_at&_order=desc`
        )
        .then(comments_response => {
          console.log("comments_response :>> ", comments_response);
          setTimeout(() => {
            this.question.comments = comments_response?.data || [];
            this.question.comments.sort(this.orderCreatedAtByASC);
            this.loadingBarShow = false;
          }, 0);
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

        appAxios.post("/comments", comment).then(() => {
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
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser"
    }),
    currentUserID() {
      return this.currentUser?.id;
    },
    questionUserName() {
      // if(isObject(this.question?.user)){
      return `${this?.question?.user?.full_name.split(" ")[0]} `;
      // }
    }
  }
};
</script>
