<template lang="pug">
  v-app
    v-card
      v-card-title
        | Games
        v-spacer
      v-text-field(v-model='search', append-icon='mdi-magnify', label='Search', single-line, hide-details)
      v-data-table.elevation-1(:headers='headers', :items='games', :items-per-page='-1' :search='search')
        template(#item.player1='{ item }')
          router-link(:to="{ name: 'player', params: { playerID: item.player1.id }}")
            | {{ item.player1.name }}
        template(#item.player2='{ item }')
          router-link(:to="{ name: 'player', params: { playerID: item.player2.id }}")
            | {{ item.player2.name }}
        template(#item.data='{ item }')
          ul
            li Diffrence between ranking: {{  Math.abs(item.player1.ranking - item.player2.ranking) }}
            li {{ item.date }}
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class About extends Vue {
  search = ''
  headers = [
    {text: 'Player 1', value: 'player1'},
    {text: 'Result', value: 'result'},
    {text: 'Player 2', value: 'player2'},
    // {text: 'Is Done', value: 'isDone'},
    {text: 'Details', value: 'data'},
  ]
  games = [{
    player1: {
      id: '197038da-a28f-47a8-aa78-ecc721315c0f',
      ranking: 2847,
      name: 'Magnus Carlsen'
    }, player2: {
      id: '08933fe1-bcb8-4669-8f44-faaecaaa1645',
      ranking: 1800,
      name: 'Andrea Botez'
    },
    result: '0:1',
    date: '1 quarter 2022',
  }, {
    player1: {
      id: '197038da-a28f-47a8-aa78-ecc721315c0f',
      ranking: 1999,
      name: 'John Rambo'
    }, player2: {
      id: '08933fe1-bcb8-4669-8f44-faaecaaa1645',
      ranking: 2000,
      name: 'Rocky Balboa'
    },
    result: '1:1',
    date: '4 quarter 2022',
  }]
}

</script>
