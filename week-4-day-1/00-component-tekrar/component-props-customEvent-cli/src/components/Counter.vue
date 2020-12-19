<template>
  <div class="row mt-5">
    <div class="col border p-2 text-center">
      <h1>{{ title }}</h1>
      <p class="text-muted">{{ description }}</p>
      <h3>{{ counter }}</h3>
      <button class="btn btn-success mr-2" @click="counter++">(+)</button>
      <button class="btn btn-danger ml-5" @click="counter--">(-)</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "description", "initialValue"],
  data() {
    return {
      name: "Counter 1",
      counter: 0,
      //   description: "Bu nedir Allah aşkına!",
    };
  },
  created() {
    console.log(this.title, "=>", this.initialValue);
    this.counter = this.initialValue;
  },
};
</script>
