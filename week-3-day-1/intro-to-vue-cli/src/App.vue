<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3 border p-2">
        <h3>Vue CLI</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          accusamus beatae quo molestiae possimus ipsam voluptates tempore
          itaque culpa placeat necessitatibus incidunt qui, distinctio eos
          maiores, facilis iste sint. Architecto.
        </p>
        <h3>{{ counter }}</h3>
        <button class="btn btn-warning" @click="counter++">Cli Giriş</button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6 offset-3 border p-2">
        <counter-el></counter-el>
        <counter-el />
        <counter-el />
      </div>
    </div>
  </div>
</template>

<script>
import myCounterItem from "@/components/myCounterItem";
export default {
  components: {
    "counter-el": myCounterItem,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>
