<template>
  <div class="col-10">
    <question-list-item
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
  </div>
</template>
<script>
import questionListItem from "@/components/Home/questionListItem";
import { appAxios } from "@/utils/securedAxios";
export default {
  props: ["categoryId"],
  components: {
    questionListItem
  },
  data() {
    return {
      questions: []
    };
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    fetchQuestions(categoryId) {
      const url = categoryId
        ? `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=${categoryId}`
        : `/questions?_expand=category&_sort=created_at&_order=desc`;

      appAxios.get(url).then(question_list_response => {
        this.questions = question_list_response?.data || [];
        console.log("question_list_response :>> ", question_list_response);
      });
    }
  },
  watch: {
    categoryId(categoryId) {
      if (categoryId !== null) {
        this.fetchQuestions(categoryId);
      }
    }
  }
};
</script>
