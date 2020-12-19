<template>
  <div class="row">
    <div class="col">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias.
        Porro laboriosam itaque doloremque asperiores facere architecto pariatur
        voluptas dignissimos ab eos enim dicta ex incidunt, molestiae quas ut.
        Cum.
      </p>
      <button class="btn btn-success" @click="sendData">Gönder</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendData() {
      // Custom Event...
      //   this.$emit("eventName", value);
      this.$emit(
        "childEventTriggered",
        "Bu Child Component üzerinden gelmiş bir bilgidir..."
      );
    },
  },
  created() {},
  mounted() {
    console.log("Mounted Calisti...");
    this.$emit("mounted-success-event");
  },
};
</script>
