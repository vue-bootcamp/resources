<template>
  <div class="container">
    <child11 />
  </div>
</template>

<script>
import Child11 from "@/components/Child11";
export default {
  props: ["serverList"],
  components: {
    Child11,
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  border: 1px solid #666;
  padding: 5px 10px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
</style>
