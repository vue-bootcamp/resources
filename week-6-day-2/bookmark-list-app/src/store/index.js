import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    bookmarks: [],
    settings: {
      create: true,
      delete: true,
      update: true,
    },
  },
  mutations: {
    fillBookmarks(state, pBookmarkList) {
      state.bookmarks = pBookmarkList;
    },
    deleteBookmark(state, bookmarkID) {
      state.bookmarks = state.bookmarks.filter((b) => b.id !== bookmarkID);
    },
    newBookmark(state, bookmark) {
      state.bookmarks.push(bookmark);
    },
    updateBookmark(state) {},
  },
  actions: {
    initApp({ commit }) {
      axios
        .get("http://localhost:3000/bookmarks")
        .then((bookmarkList_response) => {
          console.log("bookmarkList_response", bookmarkList_response);
          commit("fillBookmarks", bookmarkList_response.data);
        });
    },
    saveBookmark({ commit }, bookmark) {
      axios
        .post("http://localhost:3000/bookmarks", bookmark)
        .then((bookmark_add_response) => {
          commit("newBookmark", bookmark_add_response.data);
        });
    },
    deleteBookmark({ commit }, bookmarkID) {
      axios
        .delete(`http://localhost:3000/bookmarks/${bookmarkID}`)
        .then((delete_response) => {
          if (delete_response.status === 200) {
            commit("deleteBookmark", bookmarkID);
          }
        });
    },
  },
  getters: {
    getBookmarkList: (state) => state.bookmarks,
    // reverseBookmarkList: (state) => state.bookmarks.reverse(),
    settings: (state) => state.settings,
  },
});
