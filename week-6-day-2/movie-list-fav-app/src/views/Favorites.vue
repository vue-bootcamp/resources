<template>
  <app-movie-list :movieList="movieList" />
</template>
<script>
import appMovieList from "@/components/appMovieList";
import { mapGetters } from "vuex";
export default {
  components: {
    appMovieList,
  },
  computed: {
    ...mapGetters({
      movieList: "myFavorites",
    }),
  },
};
</script>
