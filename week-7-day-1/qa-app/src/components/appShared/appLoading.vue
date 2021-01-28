<template>
  <div
    class="loading-container d-flex justify-content-center align-items-center"
  >
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<style scoped>
.spinner-border {
  color: #8409de;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ccccccc9;
  z-index: 10;
}
</style>
