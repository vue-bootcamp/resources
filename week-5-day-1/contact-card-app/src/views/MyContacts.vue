<template>
  <div class="container">
    <div class="contact--card--app">
      <app-contact-item
        @contact-delete-event="refreshList"
        :hasAlreadyContact="true"
        v-for="contact in contactList"
        :key="contact.id"
        :contactInfo="contact"
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
      contactList: []
    };
  },
  created() {
    axios.get("http://localhost:3000/contacts").then(contact_list_response => {
      console.log("Contact List", contact_list_response);
      this.contactList = contact_list_response.data;
    });
  },
  methods: {
    refreshList(contact) {
      this.contactList = this.contactList.filter(i => i.id !== contact.id);
    }
  }
};
</script>
