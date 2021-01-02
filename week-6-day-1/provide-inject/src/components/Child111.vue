<template>
  <div class="container3">
    <input v-model="serverName" type="text" placeholder="server name.." />
    <button @click="changeServerName(serverName)">
      Send Stats..
    </button>
    <ul>
      <li v-for="server in serverList" :key="server">{{ server }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ["serverList"],
  inject: ["serverList", "changeServerName"],
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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
