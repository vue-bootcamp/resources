<template>
  <app-search-bar />
  <app-movie-list :movieList="movieList" />
</template>

<script>
import appSearchBar from "@/components/appSearchBar";
import appMovieList from "@/components/appMovieList";
import { mapGetters } from "vuex";

export default {
  components: {
    appSearchBar,
    appMovieList,
  },
  computed: {
    ...mapGetters({
      movieList: "movieItemList",
    }),
  },
};
</script>
