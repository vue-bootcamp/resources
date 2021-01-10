<template>
  <div v-if="questions.length > 0" class="col-10">
    <question-list-item
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
  </div>
  <div v-else class="col-4 offset-3 mt-5">
    <div class="alert alert-primary" role="alert">
      Bu Kategori(lere) ait bir soru bulunamadı. Soru sormak için
      <router-link :to="newQuestionURL">tıklayınız</router-link>
    </div>
  </div>
</template>
<script>
import questionListItem from "@/components/Home/questionListItem";
import { mapGetters } from "vuex";
export default {
  components: {
    questionListItem
  },
  created() {
    // this.fetchQuestions();
    this.$store.dispatch("questions/fetchQuestions", this.selectedCategories);
  },
  computed: {
    ...mapGetters({
      questions: "questions/_questionList",
      selectedCategories: "categories/_selectedCategoryList"
    }),
    selectedCategory() {
      if (this.selectedCategories.length === 1) {
        return this.selectedCategories[0]?.id;
      } else {
        return false;
      }
    },
    newQuestionURL() {
      return this.selectedCategory
        ? `/new?categoryId=${this.selectedCategory}`
        : "/new";
    }
  }
};
</script>
