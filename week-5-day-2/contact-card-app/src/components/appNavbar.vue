<template>
  <div class="navbar">
    <div class="links">
      <router-link to="/">[ Anasayfa ]</router-link>
      <router-link to="/contact-requests">[ Arkadaşlık İstekleri ]</router-link>
      <router-link to="/contacts">[ Arkadaşlarım ]</router-link>
    </div>
  </div>
</template>

<style>
.navbar {
  width: 100%;
  height: 50px;
  background-color: #324354;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}

.navbar a {
  color: #ccc;
  margin-right: 10px;
  text-decoration: none;
}

.navbar a:hover {
  color: #fff;
}

.navbar a.router-link-active,
.navbar a.router-link-exact-active {
  color: #f5e20c;
}
</style>
