<template>
  <h3>Gelen Data : {{ server }}</h3>
</template>

<script>
export default {
  props: {
    server: {
      type: String,
      required: true,
    },
    // propname : {}
  },
  //   props : ["server", ...]
};
</script>
