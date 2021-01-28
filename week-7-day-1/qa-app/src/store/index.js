import { createStore } from "vuex";
import categories from "./modules/categories";
import questions from "./modules/questions";
import users from "./modules/users";
import likes from "./modules/likes";

export default createStore({
  state: {
    loading: false
  },
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
    users,
    likes
  },
  getters: {
    loading: state => state.loading
  }
});
