<template>
  <div>
    <div class="lang-container">
      <a
        class="lang-button"
        :class="{ active: currentContent === 'HelloWorld' }"
        @click="currentContent = 'HelloWorld'"
        href="#"
        >En</a
      >
      <a
        class="lang-button"
        :class="{ active: currentContent === 'MerhabaDunya' }"
        @click="currentContent = 'MerhabaDunya'"
        href="#"
        >Tr</a
      >
      <a
        class="lang-button"
        :class="{ active: currentContent === 'BonjourLeMonde' }"
        @click="currentContent = 'BonjourLeMonde'"
        href="#"
        >Fr</a
      >
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />

    <keep-alive>
      <component :is="currentContent" />
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MerhabaDunya from "./components/MerhabaDunya.vue";
import BonjourLeMonde from "./components/BonjourLeMonde";

export default {
  components: {
    HelloWorld,
    MerhabaDunya,
    BonjourLeMonde,
  },
  data() {
    return {
      currentLang: "en",
      currentContent: "HelloWorld",
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
