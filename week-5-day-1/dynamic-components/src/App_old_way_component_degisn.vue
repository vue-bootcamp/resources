<template>
  <div>
    <div class="lang-container">
      <a
        class="lang-button"
        :class="{ active: currentLang === 'en' }"
        @click="currentLang = 'en'"
        href="#"
        >En</a
      >
      <a
        class="lang-button"
        :class="{ active: currentLang === 'tr' }"
        @click="currentLang = 'tr'"
        href="#"
        >Tr</a
      >
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld v-if="currentLang === 'en'" msg="Welcome to Your Vue.js App" />
    <MerhabaDunya
      v-if="currentLang === 'tr'"
      msg="Vue.js Uygulamanıza Hoş geldiniz.."
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MerhabaDunya from "./components/MerhabaDunya.vue";

export default {
  components: {
    HelloWorld,
    MerhabaDunya,
  },
  data() {
    return {
      currentLang: "en",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.lang-container {
  text-align: center;
}
.lang-button {
  margin-right: 5px;
  padding: 2px 5px;
  background-color: #213243;
  color: #fff;
  /* display: block; */
  text-decoration: none;
  width: 75px;
  border-radius: 5px;
}

.lang-button.active {
  /* padding:  */
  background-color: #2462a0;
}
</style>
