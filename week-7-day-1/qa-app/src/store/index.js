import { createStore } from "vuex";
import categories from "./modules/categories";
import questions from "./modules/questions";
import users from "./modules/users";

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
    questions,
    users
  }
});
