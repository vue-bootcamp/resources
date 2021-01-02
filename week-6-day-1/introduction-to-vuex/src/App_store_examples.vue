<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-2">
        <h4>{{ $store.getters.userPrice }}</h4>
        <div class="form-group">
          <input type="text" class="form-control" v-model="newPrice" />
        </div>
        <button @click="setNewPrice" class="mt-3 btn btn-primary btn-sm me-2">
          Set Price
        </button>
        <!-- <ChildA />
        {{ $store.getters.randomList }}
        -->
        {{ $store.getters.randomList }}
      </div>
    </div>
  </div>
</template>

<script>
import ChildA from "@/components/ChildA";
export default {
  components: {
    ChildA,
  },
  created() {
    console.log("object", this.$store.state.counter);
    console.log("Okunna", this.$store.getters.counterValue);
    // this.$store.state.incoming_price = 500;
  },
  data() {
    return {
      newPrice: 0,
    };
  },
  methods: {
    setNewPrice() {
      // this.$store.state.incoming_price = this.newPrice;
      // Mutation...
      this.$store.commit("setIncomingPrice", this.newPrice);
      this.$store.commit("addToList", "kablosuzkedi");
    },
  },
  computed: {},
};
</script>
