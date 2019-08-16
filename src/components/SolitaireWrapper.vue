<template>
  <div id="SolitaireWrapper" class="wrapper">

    <button @click="deal()">DEAL</button>
    <Deck cards=[deckCards]></Deck>
    <Finished></Finished>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardService from '../services/card.service'
import { Game } from '../models/game'
import Deck from './Deck.vue';
import Finished from './Finished.vue';

@Component({
  components: {
    Deck,
    Finished
  },
})
export default class SolitaireWrapper extends Vue {
  public deckCards = [];

  deal(): void {
    const game = CardService.deal();
    console.log('dealt', game);
    // this.deckCards = game.deck;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
