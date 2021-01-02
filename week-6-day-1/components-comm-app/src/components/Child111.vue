<template>
  <div class="container3">
    <input v-model="serverName" type="text" placeholder="server name.." />
    <button @click="$emit('server-name-changed-event', serverName)">
      Send Stats..
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverName: null,
    };
  },
};
</script>

<style scoped>
.container3 {
  width: 300px;
  border: 2px solid red;
  padding: 5px 10px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
</style>
