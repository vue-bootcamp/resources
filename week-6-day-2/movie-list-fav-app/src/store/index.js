import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    movies: [],
    baseURL: "http://www.omdbapi.com",
    apiKey: "52ea8c67",
    favorites: [],
    favoriteBaseURL: "http://localhost:3000",
  },
  mutations: {
    setMovies(state, pMovies) {
      state.movies = pMovies;
    },
    addToFavorite(state, pMovie) {
      state.favorites.push(pMovie);
    },
    setFavorites(state, pMovies) {
      state.favorites = pMovies;
    },
  },
  actions: {
    searchMovie({ commit, state }, searchKey) {
      axios
        .get(`${state.baseURL}/?apiKey=${state.apiKey}&s=${searchKey}`)
        .then((movie_list_response) => {
          console.log("Movie", movie_list_response);
          commit("setMovies", movie_list_response.data.Search || []);
        });
    },
    addToFavorite({ commit, state }, movie) {
      axios
        .post(`${state.favoriteBaseURL}/favorites`, movie)
        .then((favorites_response) => {
          commit("addToFavorite", favorites_response.data);
        });
    },
    initFavorites({ commit, state }) {
      axios
        .get(`${state.favoriteBaseURL}/favorites`)
        .then((favorites_response) => {
          console.log("favorites_response", favorites_response);
          commit("setFavorites", favorites_response.data || []);
        });
    },
  },
  getters: {
    movieItemList: (state) => state.movies,
    myFavorites: (state) => state.favorites,
  },
  modules: {},
});
