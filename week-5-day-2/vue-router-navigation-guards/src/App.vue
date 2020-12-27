<template>
  <div>
    <app-header />
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader";
export default {
  components: {
    appHeader,
  },
};
</script>
