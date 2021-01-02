<template>
  <div class="container">
    <child11
      @server-name-changed-event="$emit('server-name-changed-event', $event)"
    />
  </div>
</template>

<script>
import Child11 from "@/components/Child11";
export default {
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
