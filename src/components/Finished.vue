<template>
  <div id="Finished" class="finished">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardService from '../services/card.service'
import { Game } from '../models/game'

@Component({
  components: {},
})
export default class Finished extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.finished {
  flex: 0 0 800px;
  height: 400px;
}
</style>
