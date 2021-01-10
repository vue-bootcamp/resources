import { appAxios } from "@/utils/securedAxios";

export default {
  namespaced: true,
  state: {
    questions: []
  },
  mutations: {
    setQuestions(state, pQuestions) {
      state.questions = pQuestions;
    },
    setNewQuestion() {}
  },
  actions: {
    fetchQuestions({ commit }, selectedCategories) {
      // const url = this.categoryId
      //   ? `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=${this.categoryId}`
      //   : `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=1&categoryId=2`;
      // : `/questions?_expand=category&_sort=created_at&_order=desc`;
      let url = "/questions?_expand=category&_sort=created_at&_order=desc";

      if (selectedCategories) {
        const IDs = selectedCategories
          .filter(c => c.selected)
          .map(c => `categoryId=${c.id}`)
          .join("&");
        url = `${url}&${IDs}`;
      }

      appAxios.get(url).then(question_list_response => {
        // console.log("question_list_response :>> ", question_list_response);
        commit("setQuestions", question_list_response?.data || []);
      });
    },
    // fetchQuestion({ commit }){
    // },
    newQuestion() {}
  },
  getters: {
    _questionList: state => state.questions
  }
};
