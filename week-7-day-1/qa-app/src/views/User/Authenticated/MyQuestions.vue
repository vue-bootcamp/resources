<template>
  <!-- SORULAR -->
  <div class="container">
    <div class="row mt-3">
      <div class="col-10 offset-1">
        <template v-if="myQuestionList.length > 0">
          <question-list-item
            v-for="question in myQuestionList"
            :key="question.id"
            :question="question"
          />
        </template>

        <div v-else class="mt-5">
          <div class="alert alert-primary" role="alert">
            Burası çok ıssız :(
            <router-link to="/new">Buraya</router-link> tıklayarak Hemen soru
            sormaya başlayabilirsin..
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- !SORULAR -->
</template>
<script>
import { appAxios } from "@/utils/securedAxios";
import { mapGetters } from "vuex";
import questionListItem from "@/components/Home/questionListItem";

export default {
  components: {
    questionListItem
  },
  data(){
    return {
      myQuestionList : []
    }
  },
 created() {
    appAxios
      .get(`/questions?userId=${this.currentUser.id}&_expand=category&_embed=comments&_expand=user`)
      .then(question_list_response => {
        this.myQuestionList = question_list_response?.data || [];
      });
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser"
    })
  }
 
};
</script>
