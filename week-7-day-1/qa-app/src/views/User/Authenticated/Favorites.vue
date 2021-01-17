<template>
  <!-- SORULAR -->
  <div class="container">
    <div class="row mt-3">
      <div class="col-10 offset-1">
        <template v-if="favoriteList.length > 0">
          <question-list-item
            :favoriteItem="true"
            v-for="favorite in favoriteList"
            :key="favorite.id"
            :question="favorite.question"
          />
        </template>

        <div v-else class="mt-5">
          <div class="alert alert-primary" role="alert">
            Burası çok ıssız :(
            <router-link to="/">Buraya</router-link> tıklayarak Hemen soru
            beğenmeye başlayabilirsin..
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- !SORULAR -->
</template>
<script>
import { mapGetters } from "vuex";
import questionListItem from "@/components/Home/questionListItem";

export default {
  components: {
    questionListItem
  },
   computed: {
    ...mapGetters({
      favoriteList: "users/favoriteList"
    })
  }
};
</script>
