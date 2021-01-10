import { appAxios } from "@/utils/securedAxios";

export default {
  namespaced: true,
  state: {
    categories: []
    // selectedCategories: []
  },
  mutations: {
    setCategories(state, pCategories) {
      state.categories = pCategories.map(c => {
        return {
          ...c,
          selected: false
        };
      });
    }
    // addToSelectedCategories(state, pCategory) {
    //   //   state.selectedCategories = [ ...state.selectedCategories, pCategory]
    //   if (!state.selectedCategories.find(c => c.id === pCategory.id)) {
    //     state.selectedCategories.push(pCategory);
    //   } else {
    //     state.selectedCategories = state.selectedCategories.filter(
    //       c => c.id !== pCategory.id
    //     );
    //   }
    // }
  },
  actions: {
    fetchCategories({ commit }) {
      appAxios.get("/categories").then(category_response => {
        commit("setCategories", category_response?.data || []);
      });
    }
  },
  getters: {
    _categoryList: state => state.categories,
    _selectedCategoryList: state => state.categories.filter(c => c.selected)
  }
};
