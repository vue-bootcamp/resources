<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- KATEGORILER -->
      <category-sidebar @category-select-event="categoryId = $event" />
      <!-- !KATEGORILER -->

      <!-- SORULAR -->
      <question-list :categoryId="categoryId" />
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
  }
};
</script>
