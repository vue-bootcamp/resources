<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import appNavbar from "@/components/appNavbar";
export default {
  components: {
    appNavbar,
  },
};
</script>
