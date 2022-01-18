<template lang="pug">
  v-app
    v-card
      v-card-title Games
        v-spacer
      v-text-field(v-model='search', append-icon='mdi-magnify', label='Search', single-line, hide-details)
      v-data-table.elevation-1(:headers='headers', :items='games', :items-per-page='-1' :search='search')
        template(#item.player1='{ item }')
          router-link(:to="{ name: 'player', params: { playerID: item.player1.id }}") {{ item.player1.name }}
        template(#item.player2='{ item }')
          router-link(:to="{ name: 'player', params: { playerID: item.player2.id }}") {{ item.player2.name }}
        template(#item.data='{ item }')
          ul
            li Difference between ranking: {{  Math.abs(item.player1.ranking - item.player2.ranking) }}
            li {{ item.date }}
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapState} from 'vuex';

@Component({
  computed: {
    ...mapState(['headers', 'games']),
  },
})
export default class Games extends Vue {
  search = ''
  // headers = []
  // games = []

  async mounted(): Promise<void> {
    await this.$store.dispatch('loadGames')
    // this.headers = this.$store.state.headers
    // this.$store
    // this.headers = this.$store.state.headers
    // this.headers = this.$store.state.headers
    // this.games = this.$store.state.games
    // this.games = this.$store.state.games
  }
}

</script>
