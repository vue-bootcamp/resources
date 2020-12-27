<template>
  <div class="container">
    <h3>Ayarlar</h3>
    <p>Burası bizim hakkımda sayfamız...</p>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Username" v-model="username" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: null
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter Çalıştı...");
    // next is callback
    console.log("to :>> ", to);
    // console.log("from :>> ", from);

    // Workaround

    // if (to.params.id === "2018") {
    //   next();
    // } else {
    //   alert("Görüntülemeye izniniz bulunmamaktadır..");
    //   next("/");
    // }
    next();
    // Global Çözüm..
    // next((vm) => {
    //   console.log(vm.$route.params.id);
    //   if (vm.$route.params.id === "2018") {
    //     return true;
    //   } else {
    //     alert("Geçişe izniniz bulunmamaktadır..");
    //     return false;
    //   }
    // });

    // next(false);

    // if (this.$route.params.id === "2018") {
    //   // ...
    //   next(); // geçişin başarılı...
    // } else {
    //   // ...
    //   alert("Geçişe izniniz bulunmamaktadır..");
    //   next(false); // geçiş başarısız..
    // }
  },
  beforeRouteUpdate(to, from) {
    // console.log("To", to);
    // console.log("From", from);
    console.log("beforeRouteUpdate ÇAlıştı");
  },
  beforeRouteLeave(to, from) {
    console.log("beforeRouteLeave Çalıştı...");
    if (this.username !== null) {
      if (confirm("Kaydedilmemiş değişiklikleriniz var yine de çıkmak istiyor musunuz?")) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  },
  created() {
    console.log("Created Çalıştı..");
    console.log("this.$route.params.id", this.$route.params.id);
    // axios.get(...);
    // axios.post(...);
    // axios.post(...);
  }
};
</script>
