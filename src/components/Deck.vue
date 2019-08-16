<template>
  <div id="Deck" class="deck">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardService from '../services/card.service';
import { Card } from '../models/card';

@Component({
  components: {},
})
export default class Deck extends Vue {
    @Prop() private cards!: Card[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.deck {
  flex: 0 0 1;
  height: 400px;
}
</style>
