<template>
  <div class="container">
    <div class="card text-center details-card">
      <img :src="user.img" :alt="user.contact_name" />
      <h3>{{ user.contact_name }} (#{{ $route.params.userId }})</h3>
      <p class="text-muted">{{ user.title }}</p>
      <p class="mt-5 mb-5">{{ user.shared_contacts }} ortak bağlantı</p>
      <ul class="list">
        <li class="list-item" v-for="hobby in user.hobbies" :key="hobby">{{ hobby }}</li>
      </ul>
      <button class="btn-info btn-sm" @click="$router.push('/contacts')">Arkadaşlarıma Geri Dön</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        contact_name: null,
        title: null,
        shared_contacts: null,
        img: null,
        hobbies: []
      }
    };
  },
  created() {
    console.log("Created Calisti..");
    // console.log("ROUTE", this.$route.params.userId);
    this.fetchUser();
  },
  updated() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      if (this.$route.params.userId) {
        axios
          .get(`http://localhost:3000/users/${this.$route.params.userId}`)
          .then(fetched_user_response => {
            // console.log("fetched_user_response", fetched_user_response);
            this.user = fetched_user_response.data;
          })
          .catch(e => {
            // console.log("HATA VARRR", e.response.status);
            if (e.response.status === 404) {
              // router-link
              this.$router.push("/not-found");
            }
          });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // next(false);
    // next();
    // next("/");
    // next(vm => {
    //   vm.$router.push("/");
    // });
    console.log("beforeRouteEnter => ", to, from);
    // ...
  },
  beforeRouteUpdate(to, from) {
    //...
    console.log("beforeRouteUpdate => ", to, from);
  },
  beforeRouteLeave(to, from) {
    console.log("beforeRouteLeave => ", to, from);
    // if (confirm("Çıkmak istiyor musunuz?")) {
    // ...
    // }
  }
};
</script>

<style scoped>
.details-card {
  width: 500px !important;
}

.details-card img {
  /* border-radius: 50%; */
  width: 100px;
  /* height: 300px; */
}
</style>
