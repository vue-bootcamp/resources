import { appAxios } from "@/utils/securedAxios";
import router from "../../../router";
export default {
  namespaced: true,
  state: {
    user: null,
    favorites: []
  },
  mutations: {
    setUser(state, pUser) {
      state.user = pUser;
    },
    logout(state) {
      state.user = null;
      localStorage.clear();
      router.push({ name: "Home" });
      // localStorage.removeItem("key")
    },
    setFavorites(state, pFavorites) {
      state.favorites = pFavorites;
    },
    addToFavorites(state, pFavorite) {
      state.favorites.push(pFavorite);
    },
    deleteFavorite(state, favoriteID) {
      state.favorites = state.favorites.filter(f => f.id !== favoriteID);
    }
  },
  actions: {
    register({ commit, dispatch }, pUser) {
      appAxios.post("/users", pUser).then(register_response => {
        console.log("Register", register_response);
        commit("setUser", register_response?.data);
        localStorage.user = JSON.stringify(register_response?.data);
        dispatch("setFavorites");
        router.push("/");
      });
    },
    login({ commit, dispatch }, pUser) {
      appAxios
        .get(`/users?email=${pUser.email}&password=${pUser.password}`)
        .then(login_response => {
          if (
            login_response?.status === 200 &&
            login_response?.data?.length > 0
          ) {
            commit("setUser", login_response?.data[0]);
            // localStorage.setItem("key", value)
            localStorage.user = JSON.stringify(login_response?.data[0]);
            dispatch("setFavorites");
            router.push("/");
          }
        });
    },
    // Favorites...
    setFavorites({ state, commit }) {
      if (state.user !== null) {
        appAxios
          .get(`/favorites?userId=${state.user.id}&_expand=question`)
          .then(favorites_response => {
            console.log("favorites_response :>> ", favorites_response);
            commit("setFavorites", favorites_response?.data);
          });
      }
    },
    addToFavorites({ state, commit }, pFavorite) {
      const matchedFavorite = state.favorites.find(
        f => f.questionId === pFavorite.id
      );
      if (matchedFavorite) {
        // Eğer varsa favori listesinden çıkar.
        appAxios
          .delete(`/favorites/${matchedFavorite.id}`)
          .then(delete_response => {
            console.log("delete_response", delete_response);
            commit("deleteFavorite", matchedFavorite.id);
          });
      } else {
        // Eğer yoksa favori listesine ekle..
        // state.favorites.push(pFavorite);
        const favoriteItem = {
          questionId: pFavorite.id,
          created_at: new Date(),
          userId: state.user.id
        };
        appAxios.post("/favorites", favoriteItem).then(favorite_response => {
          console.log("favorite_response", favorite_response);
          commit("addToFavorites", favorite_response?.data);
        });
      }
    }
  },
  getters: {
    currentUser: state => state.user,
    isAuthenticated: state => state.user !== null,
    favoriteList: state => state.favorites
  }
};
