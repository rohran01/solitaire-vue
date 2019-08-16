<template>
  <div id="app">
    <SolitaireWrapper></SolitaireWrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SolitaireWrapper from './components/SolitaireWrapper.vue';

@Component({
  components: {
    SolitaireWrapper
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
}
</style>
