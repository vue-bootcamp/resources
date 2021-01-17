<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- KATEGORILER -->
      <category-sidebar />
      <!-- !KATEGORILER -->

      <!-- SORULAR -->
      <question-list />
      <!-- !SORULAR -->
    </div>
  </div>
</template>

<script>
import questionList from "@/components/Home/questionList";
import categorySidebar from "@/components/Home/categorySidebar";
export default {
  name: "Home",
  components: {
    questionList,
    categorySidebar
  },
  data() {
    return {
      categoryId: null
    };
  },

  created() {
    // const title = this.$store.state.title;
    // const title = this.$store.state.categories.title;
    // const title = this.$store.state.questions.title;
    // console.log("Title", title);
  }
};
</script>
