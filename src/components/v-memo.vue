<template>
  <input type="text" v-model="cry">
  <ul class="wrapper" v-memo="[shouldUpdate]">
    <li v-for="item in arr" :key="item">
      {{ cry }} : {{ animalType[cry] }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue';
const cry: Ref<string> = ref('football')
const arr = new Array(100)
interface animal {
  'basketball': string,
  'football': string,
  'tabbleTennis': string
}
const animalType: animal = {
  'basketball': '🏀',
  'football': '⚽️',
  'tabbleTennis': '🏓'
}
const shouldUpdate = ref(0)
// watch(() => cry.value, (newVal) => {
//   if (Object.keys(animalType).includes(cry.value)) {
//     shouldUpdate.value++
//   }
// })
watch(cry, (newVal) => {
  if (Object.keys(animalType).includes(newVal)) {
    shouldUpdate.value++
  }
})
</script>

<style scoped>
</style>
