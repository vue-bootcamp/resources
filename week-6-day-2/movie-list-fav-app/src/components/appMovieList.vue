<template>
  <div id="movies">
    <app-movie-list-item
      v-for="movie in movieList"
      :key="movie.imdbID"
      :movie="movie"
    />
  </div>
</template>

<script>
import appMovieListItem from "@/components/appMovieListItem";
export default {
  components: {
    appMovieListItem,
  },
  props: {
    movieList: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.$store.dispatch("initFavorites");
  },
};
</script>
