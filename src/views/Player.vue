<template lang="pug">
  v-app
    v-data-table.elevation-1(:headers='headers', :items='desserts', :items-per-page="-1")
      template(v-slot:item.isDone='{ item }')
        v-simple-checkbox(v-model='item.isDone', disabled='')
      template(v-slot:item.data='{ item }')
        v-textarea(v-model='item.data', rows='3', clearable=true row-height="15" solo, disabled, no-resize, )
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Player extends Vue {
  headers = [
    {text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name'},
    {text: 'Calories', value: 'calories'},
    {text: 'Fat (g)', value: 'fat'},
    {text: 'Carbs (g)', value: 'carbs'},
    {text: 'Is Done', value: 'isDone'},
    {text: 'Details', value: 'data'},
  ]
  desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      isDone: true,
      data: '1 quarter 2022 \n No fauls \n Good to watch',
    }, {
      name: 'Kit kat', calories: 412, fat: 321.0, carbs: 12312312, isDone: false, data: '4 quarter 2021',
    }
  ]

}

</script>
