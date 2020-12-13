<template>
  <div class="container">
    <div
      class="bet--coupon--app d-flex justify-content-between align-items-start"
    >
      <!-- Mac Listesi-->
      <!-- kebab-case -->
      <!-- camelCase -->
      <!-- <appCompetitionList /> -->
      <!-- PascalCase -->
      <!-- <AppCompetitionList /> -->
      <app-competition-list />
      <!-- Kuponum -->
      <div class="coupon--total--container">
        <app-my-coupon />
        <app-result-and-multiply />
      </div>
    </div>
  </div>
</template>
<script>
import appCompetitionList from "@/components/appCompetitionList";
import appMyCoupon from "@/components/app-my-coupon";
import AppResultAndMultiply from "@/components/AppResultAndMultiply";

export default {
  components: {
    // "match-list": appCompetitionList,
    // "competition-list": appCompetitionList,
    // competitionList: appCompetitionList,
    appCompetitionList,
    appMyCoupon,
    AppResultAndMultiply,
  },
};
</script>
