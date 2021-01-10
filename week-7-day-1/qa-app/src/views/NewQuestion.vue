<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-header">
            Yeni Soru
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label"
                >Kısa bir başlık</label
              >
              <input
                v-model="userData.title"
                type="text"
                class="form-control"
                id="question-title"
                placeholder="Bu soru çokomelli"
              />
            </div>
            <div class="mb-3">
              <label for="question-details" class="form-label">Detaylar</label>
              <textarea
                v-model="userData.details"
                class="form-control"
                id="question-details"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label">Kategori</label>
              <select
                v-model="userData.categoryId"
                id="question-category"
                class="form-select"
              >
                <option
                  v-for="category in categories"
                  :value="category.id"
                  :key="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
            </div>
          </div>
          <div
            class="card-footer text-muted d-flex justify-content-end align-items-center"
          >
            <button
              :disabled="notAbleToSave"
              class="btn btn-sm btn-primary"
              @click="onSave"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { appAxios } from "@/utils/securedAxios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userData: {
        title: null,
        details: null,
        categoryId: null
      }
    };
  },
  created() {
    this.userData.categoryId = this.$route.query?.categoryId || null;
  },
  methods: {
    onSave() {
      if (confirm("İşleme devam etmek istiyor musunuz?")) {
        appAxios
          .post("/questions", {
            ...this.userData,
            created_at: new Date()
          })
          .then(question_insert_response => {
            console.log("Question insert response", question_insert_response);
            this.$router.push({ name: "Home" });
          });
      }
    }
  },
  computed: {
    notAbleToSave() {
      // return this.userData?.title?.length === 0 || this.userData?.details?.length === 0 || this.userData.categoryId === null;
      return (
        Object.values(this.userData).filter(
          v => v === null || v?.length === 0 || v?.length === ""
        ).length > 0
      );
    },
    ...mapGetters({
      categories: "categories/_categoryList"
    })
  }
};
</script>
