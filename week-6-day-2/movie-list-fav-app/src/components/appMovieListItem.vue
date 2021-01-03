<template>
  <div class="movie-container">
    <div class="image-container">
      <img :src="moviePoster" />
    </div>
    <div class="info">
      <h3 class="title">{{ movie.Title }}</h3>
      <p>{{ movie.Type }} / {{ movie.Year }}</p>
      <div class="action_container">
        <i
          @click="addToFavorites"
          :class="favoriteClasses"
          class="fa fa-heart"
        ></i>
        <a
          target="_blank"
          :href="`https://www.imdb.com/title/${movie.imdbID}/`"
          class="button"
          >IMDb</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToFavorites() {
      this.$store.dispatch("addToFavorite", this.movie);
    },
  },
  computed: {
    ...mapGetters(["myFavorites"]),
    moviePoster() {
      return this.movie.Poster !== "N/A" ? this.movie.Poster : "/default.png";
    },
    favoriteClasses() {
      return {
        is_favourite:
          this.myFavorites.find((fav) => fav.imdbID === this.movie.imdbID) ||
          false,
      };
    },
  },
};
</script>
