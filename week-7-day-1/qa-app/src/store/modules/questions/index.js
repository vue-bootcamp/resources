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
    fetchQuestions({ commit }, { selectedCategories, searchKey }) {
      // const url = this.categoryId
      console.log("searchKey", searchKey);
      //   ? `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=${this.categoryId}`
      //   : `/questions?_expand=category&_sort=created_at&_order=desc&categoryId=1&categoryId=2`;
      // : `/questions?_expand=category&_sort=created_at&_order=desc`;
      let url =
        "/questions?_expand=category&_sort=created_at&_order=desc&_embed=comments";

      // Eğer kategori seçimi yapilmissa o zaman kategori parametrelerini de ekle...
      if (selectedCategories) {
        const IDs = selectedCategories
          .filter(c => c.selected)
          .map(c => `categoryId=${c.id}`)
          .join("&");
        url = `${url}&${IDs}`;
      }

      // Eğer arama yapilmissa..
      if (searchKey) {
        url = `${url}&q=${searchKey}`;
      }

      appAxios.get(url).then(question_list_response => {
        console.log("question_list_response :>> ", question_list_response);
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
