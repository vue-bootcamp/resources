<template>
  <div class="card-light contact-item text-center">
    <div class="invitation--header">
      <img class="contact--image mt-20" :src="contactInfo.img" />
    </div>
    <div class="contact--info--container">
      <h4 class="mt-10">{{ contactInfo.contact_name }}</h4>
      <p class="mt-10 mb-10 text-muted">
        {{ contactInfo.title }}
      </p>
      <a class="text-muted" href="#">{{ contactInfo.shared_contacts }} Ortak Bağlantı</a>
    </div>
    <div class="action--button--container">
      <button v-if="!hasAlreadyContact" @click="addContact" class="btn-sm mr-10 btn-info">
        Bağlantı Kur
      </button>
      <button v-if="!hasAlreadyContact" @click="skipContact" class="btn-sm btn-default">Yoksay</button>

      <button v-if="hasAlreadyContact" @click="deleteContact" class="btn-sm btn-danger">Bağlantıyı Kaldır</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["contactInfo", "hasAlreadyContact"],
  methods: {
    addContact() {
      axios.post("http://localhost:3000/contacts", this.contactInfo).then(contact_approved_response => {
        axios.delete(`http://localhost:3000/contact_requests/${this.contactInfo.id}`).then(contact_request_delete_response => {
          this.$emit("contact-add-event", this.contactInfo);
        });
      });
    },
    skipContact() {
      // $emit('contact-skip-event', contactInfo)
      axios.delete(`http://localhost:3000/contact_requests/${this.contactInfo.id}`).then(skip_response => {
        console.log("Skip Response", skip_response);
        this.$emit("contact-skip-event", this.contactInfo);
      });
    },
    deleteContact() {
      axios.delete(`http://localhost:3000/contacts/${this.contactInfo.id}`).then(delete_response => {
        console.log("Delete Response", delete_response);
        this.$emit("contact-delete-event", this.contactInfo);
      });
    }
  }
};
</script>
