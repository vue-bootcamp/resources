<template>
  <div>
    <header>Contact Card App</header>
    <div class="container">
      <p v-if="contact_request_list.length === 0" class="text-center">
        Arkadaşlık İsteğiniz Bulunmamaktadır!
      </p>
    </div>
    <div class="container">
      <div class="contact--card--app mr-10">
        <!--
          :has_already_linked="false"
          :contact_name="contact.contact_name"
          :title="contact.title"
          :shared_contacts="contact.shared_contacts"
          :id="contact.id"
          :image="contact.img" -->
        <ContactItem
          v-for="contact in contact_request_list"
          :key="contact.id"
          :contact="contact"
          @add-contact-event="addContactToMe"
          @skip-contact-event="skipContact"
        />
      </div>
    </div>
    <div class="container">
      <h3 class="mb-5">Bağlantı Listesi</h3>
    </div>
    <div v-if="contact_list.length === 0" class="container">
      <p>Arkadaşınız bulunmamaktadır :(</p>
    </div>
    <div class="container">
      <div class="contact--card--app mr-10">
        <ContactItem
          v-for="contact in contact_list"
          :key="contact.id"
          :contact="contact"
          @remove-contact-event="removeContact"
          :has_already_linked="true"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ContactItem from "@/components/ContactItem";
export default {
  components: {
    ContactItem,
  },
  data() {
    return {
      contact_request_list: [
        {
          id: 1,
          contact_name: "Gokhan Kandemir",
          title: "Engineer at PureSOL",
          shared_contacts: 140,
          img: "https://picsum.photos/200/300?random=0",
        },
        {
          id: 2,
          contact_name: "İflasettin",
          title: "Teknik Dana",
          shared_contacts: 20,
          img: "https://picsum.photos/200/300?random=1",
        },
        {
          id: 3,
          contact_name: "Defne Kandemir",
          title: "CEO at PureSOL",
          shared_contacts: 1000,
          img: "https://picsum.photos/200/300?random=2",
        },
        {
          id: 4,
          contact_name: "Felakettin",
          title: "Çaycı",
          shared_contacts: 50,
          img: "https://picsum.photos/200/300?random=3",
        },
      ],
      contact_list: [],
    };
  },
  methods: {
    addContactToMe(contact) {
      // console.log("contact", contact);
      this.contact_list.push(contact);
      this.contact_request_list = this.contact_request_list.filter(
        (c) => c.id !== contact.id
      );
    },
    skipContact(contact) {
      // console.log("Silinmek istenen bilgi", contact);
      this.contact_request_list = this.contact_request_list.filter(
        (c) => c.id !== contact.id
      );
    },
    removeContact(contact) {
      console.log("Silinecek", contact);
      this.contact_request_list.push(contact);
      this.contact_list = this.contact_list.filter((c) => c.id !== contact.id);
    },
  },
};
</script>
