<template>
  <div class="layout">
    <h3>App.vue</h3>
    <child1 />
    <child2 :server="serverName" />
    <hr />
    <input type="text" @keydown.enter="serverList.push($event.target.value)" />
    <pre>
      {{ serverList }}
      </pre
    >
  </div>
</template>

<script>
import Child1 from "@/components/Child1";
import Child2 from "@/components/Child2";
export default {
  components: {
    Child1,
    Child2,
  },
  data() {
    return {
      serverName: "###",
      serverList: [
        "server_1",
        "server_1_vm",
        "server_2",
        "server_2_docker_image",
      ],
    };
  },
  provide() {
    return {
      // serverList: [
      //   "server_1",
      //   "server_1_vm",
      //   "server_2",
      //   "server_2_docker_image",
      // ],
      serverList: this.serverList,
      // serverName: this.serverName,
      changeServerName: this.changeServerName,
    };
  },
  methods: {
    changeServerName(event) {
      // alert(event);
      this.serverName = event;
    },
  },
};
</script>

<style scoped>
.layout {
  border: 2px dashed blue;
}
</style>
