<template>
  <div class="container loginPage">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Giriş Yap</div>
          <div class="card-body">
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
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button
                @click="login({ ...userData })"
                class="btn btn-sm btn-primary"
              >
                Giriş Yap
              </button>
            </div>
          </div>
          <div class="card-footer text-center">
            <router-link
              to="/register"
              class="p-0 m-0 btn btn-link text-primary"
            >
              Üye değilim
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userData: {
        email: "didem@tumer.com",
        password: "123456"
      }
    };
  },
  methods: {
    ...mapActions({
      login: "users/login"
    })
  }
};
</script>
