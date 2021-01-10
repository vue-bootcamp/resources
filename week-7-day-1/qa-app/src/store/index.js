import { createStore } from "vuex";
import categories from "./modules/categories";
import questions from "./modules/questions";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    initApp({ dispatch }) {
      dispatch("categories/fetchCategories");
      // dispatch("module/fetchXXX");
    }
  },
  modules: {
    // benimgüzelmodulum : categories,
    categories,
    questions
  }
});
