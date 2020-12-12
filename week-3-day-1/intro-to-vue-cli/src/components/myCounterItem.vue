<template>
  <div>
    <h3>{{ counter }}</h3>
    <button class="btn btn-warning" @click="counter++">Arttır</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style></style>
