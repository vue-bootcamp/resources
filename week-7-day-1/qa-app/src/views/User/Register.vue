<template>
  <div class="container loginPage">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Kayıt Ol</div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Ad Soyad</label>
              <input
                v-model="userData.full_name"
                type="text"
                class="form-control"
                placeholder="Depde Kandemir"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input
                v-model="userData.email"
                type="email"
                class="form-control"
                placeholder="info@kablosuzkedi.com"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input
                v-model="userData.password"
                type="password"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select v-model="userData.categoryId" class="form-select">
                <option selected>Lütfen bir kategori seçiniz</option>
                <option
                  v-for="category in categoryList"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
            </div>
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button
                @click="onSave({ ...userData })"
                class="btn btn-sm btn-primary"
              >
                Kayıt Ol
              </button>
            </div>
          </div>
          <div class="card-footer text-center">
            <router-link to="/login" class="p-0 m-0 btn btn-link text-primary">
              Zaten üyeyim
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      userData: {
        full_name: null,
        email: null,
        password: null,
        categoryId: null
      }
    };
  },
  methods: {
    ...mapActions({
      onSave: "users/register"
    })
    // onSave() {
    //   this.$store.dispatch("users/register", { ...this.userData });
    // }
  },
  computed: {
    ...mapGetters({
      categoryList: "categories/_categoryList"
    })
  }
};
</script>
