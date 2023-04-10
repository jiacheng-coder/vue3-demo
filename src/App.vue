<template>
  <!-- 1.teleport -->
  <teleportDemo></teleportDemo>
  <!-- 2.v-lazy -->
  <!-- <vImgLazy></vImgLazy> -->
  <!-- 3.vMemo -->
  <!-- <vMemo></vMemo> -->
  <!-- 4.h+render -->
  <!-- <button @click="() => myAlert()">alert</button> -->
  <!-- 5.defineAsyncComponent -->
  <!-- <div style="height: 1000px;background-color: blueviolet;"></div>
  <div id="vMemo"></div>
  <vMemo v-if="isShowVMemo"></vMemo> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import teleportDemo from './components/teleport-demo.vue';
// import vImgLazy from './components/v-imgLazy.vue';
// import vMemo from './components/v-memo.vue';
// import { myAlert } from './utils/alertRender';
// 5.defineAsyncComponent
// import { defineAsyncComponent } from 'vue';
// import { useIntersectionObserver } from '@vueuse/core'
// const isShowVMemo = ref(false)
// const vMemo = defineAsyncComponent(() => import('./components/v-memo.vue'))
// onMounted(() => {
//   const { stop } = useIntersectionObserver(
//     document.getElementById('vMemo'),
//     ([{ isIntersecting }], observerElement) => {
//       if (isIntersecting) {
//         isShowVMemo.value = true
//       }
//     },
//   )
// })
</script>
