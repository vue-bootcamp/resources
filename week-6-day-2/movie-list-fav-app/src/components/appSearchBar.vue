<template>
  <input
    type="text"
    autofocus
    placeholder="Film adını yazın ve enter tuşuna basın..."
    class="search_text"
    @keydown.enter="searchMovie($event.target.value)"
  />
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["searchMovie"]),
  },
};
</script>
