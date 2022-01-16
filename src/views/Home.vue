<template lang="pug">
  div
    games
    hello-world
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Games from '@/components/Games.vue'; // @ is an alias to /src

@Component({
  components: {
    Games,
    HelloWorld,
  },
})
export default class Home extends Vue {
}
</script>

