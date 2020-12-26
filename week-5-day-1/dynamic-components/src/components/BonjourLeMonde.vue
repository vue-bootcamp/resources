<template>
  <div class="hello">
    <h3>Please write us about you</h3>
    <textarea cols="30" rows="10" v-model="description"></textarea>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      description: 0,
    };
  },
  // created() {
  //   console.log("Created from Bonjour");
  // },
  // mounted() {
  //   console.log("Mounted from Bonjour");
  // },
  activated() {
    console.log("Activated from Bonjour");
  },
  deactivated() {
    console.log("Deactivated from Bonjour");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
