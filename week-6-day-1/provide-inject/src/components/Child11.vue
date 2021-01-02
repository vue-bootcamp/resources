<template>
  <div class="container2">
    <Child111 />
    {{ serverList }}
  </div>
</template>

<script>
import Child111 from "@/components/Child111";
export default {
  components: {
    Child111,
  },
  inject: ["serverList"],
};
</script>

<style scoped>
.container2 {
  width: 500px;
  border: 2px solid green;
  padding: 5px 10px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
</style>
