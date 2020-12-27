<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" active-class="active" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" active-class="active" class="nav-link">
              Hakkımızda
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/settings" active-class="active" class="nav-link">
              Ayarlar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
