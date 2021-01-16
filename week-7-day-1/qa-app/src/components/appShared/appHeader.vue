<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg"
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

        <ul class="navbar-nav me-0 mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <!-- @mouseover="menuOpened = true"
              @mouseleave="menuOpened = false" -->
            <a
              @click="menuOpened = !menuOpened"
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Gökhan Kandemir
            </a>
            <ul
              :class="{ show: menuOpened }"
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li><a class="dropdown-item" href="#">Sorularım</a></li>
              <li><a class="dropdown-item" href="#">Favorilerim</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Hesabım</a></li>
              <li>
                <a class="dropdown-item" href="#">Çıkış Yap</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
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
    }
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
