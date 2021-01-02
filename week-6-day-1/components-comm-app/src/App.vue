<template>
  <div class="layout">
    <child1 @server-name-changed-event="serverName = $event" />
    <child2 :server="serverName" />
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
    };
  },
  methods: {
    test() {
      alert();
      // "serverName = $event
    },
  },
};
</script>
