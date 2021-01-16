<template>
  <div v-if="questions.length > 0" class="col-10">
    <!-- <my-custom-input v-model="myNumber"></my-custom-input> -->
    <!-- <input type="text" class="mb-1" v-model="myNumber" /> -->
    <!-- <input
      type="text"
      class="mb-1"
      :value="myNumber"
      @input="myNumber = $event.target.value"
    /> -->
    <!-- <p class="font-weight-bold mb-5">{{ myNumber }}</p> -->
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
// import MyCustomInput from "@/components/MyCustomInput";
import { mapGetters } from "vuex";
export default {
  components: {
    questionListItem
    // MyCustomInput
  },
  data() {
    return {
      myNumber: 100
    };
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
