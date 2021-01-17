<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg sticky-top"
    style="background-color: #8409DE;"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">QA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Anasayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kategoriler</a>
          </li>
        </ul>

        <div class="d-flex me-auto">
          <input
            class="form-control searchBox"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchKey"
            @keydown.enter="search"
          />
        </div>

        <router-link
          v-if="!isAuthenticated"
          tag="button"
          to="/login"
          class="btn btn-outline-primary me-0 mb-2"
        >
          Giriş Yap</router-link
        >

        <ul v-else class="navbar-nav me-0 mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              @click.prevent="menuOpened = !menuOpened"
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ currentUser.full_name }}
            </a>
            <ul
              :class="{ show: menuOpened }"
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link class="dropdown-item" to="/my-questions">
                  Sorularım
                </router-link>
                <router-link class="dropdown-item" to="/favorites">
                  Favorilerim
                </router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <router-link class="dropdown-item" to="/account">
                Hesabım
              </router-link>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="logout"
                  >Çıkış Yap</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      menuOpened: false,
      searchKey: null
    };
  },
  methods: {
    search() {
      this.$store.dispatch("questions/fetchQuestions", {
        searchKey: this.searchKey
      });
    },
    ...mapMutations({
      logout: "users/logout"
    })
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser",
      isAuthenticated: "users/isAuthenticated"
    })
  },
  mounted() {
    document
      .querySelector(":not(#navbarDropdown)")
      .addEventListener("click", evt => {
        if (evt?.target?.id !== "navbarDropdown") {
          this.menuOpened = false;
        }
      });
  }
};
</script>
<style scoped>
.dropdown-menu.show {
  left: -7px !important;
}

.searchBox {
  width: 400px;
}
</style>
