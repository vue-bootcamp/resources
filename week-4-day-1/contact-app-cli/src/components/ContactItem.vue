<template>
  <div class="card-light contact-item text-center">
    <div class="invitation--header">
      <img class="contact--image mt-20" :src="contact.img" />
    </div>
    <div class="contact--info--container">
      <h4 class="mt-10">{{ contact.contact_name }}</h4>
      <p class="mt-10 mb-10 text-muted">
        {{ contact.title }}
      </p>
      <a class="text-muted" href="#"
        >{{ contact.shared_contacts }} Ortak Bağlantı</a
      >
    </div>
    <div class="action--button--container">
      <button
        v-if="!has_already_linked"
        class="btn-sm mr-10 btn-info"
        @click="addContact"
      >
        Bağlantı Kur
      </button>
      <button
        v-if="!has_already_linked"
        class="btn-sm btn-default"
        @click="$emit('skip-contact-event', contact)"
      >
        Yoksay
      </button>

      <button
        v-if="has_already_linked"
        class="btn-sm btn-danger btn-block"
        @click="$emit('remove-contact-event', contact)"
      >
        Bağlantıyı Kaldır
      </button>
    </div>
  </div>
</template>
<script>
export default {
  //   props: ["contact_name", "title", "shared_contacts", "id", "image"],
  props: ["contact", "has_already_linked"],
  methods: {
    addContact() {
      this.$emit("add-contact-event", this.contact);
    },
  },
};
</script>
