<template>
  <div class="container">
    <div class="contact--card--app">
      <app-contact-item
        v-for="contact in contactRequestList"
        :key="contact.id"
        :contactInfo="contact"
        @contact-add-event="refreshList"
        @contact-skip-event="refreshList"
      />
    </div>
  </div>
</template>
<script>
import appContactItem from "@/components/appContactItem";
import axios from "axios";
export default {
  components: {
    appContactItem
  },
  data() {
    return {
      contactRequestList: []
    };
  },
  created() {
    axios.get("http://localhost:3000/contact_requests").then(requests => {
      console.log("Requests", requests);
      this.contactRequestList = requests.data;
    });
  },
  methods: {
    refreshList(contact) {
      this.contactRequestList = this.contactRequestList.filter(i => i.id !== contact.id);
    }
    // addContact(contact) {
    //   this.contactRequestList = this.contactRequestList.filter(i => i.id !== contact.id);
    // },
    // skipContact(contact) {
    //   this.contactRequestList = this.contactRequestList.filter(i => i.id !== contact.id);
    // }
  }
};
</script>
