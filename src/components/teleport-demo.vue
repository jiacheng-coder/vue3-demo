<template>
  <!-- 小窗口 -->
  <div id="small"></div>

  <main>
    <Teleport to="#small" :disabled="isShow">
      <div id="big"></div>
    </Teleport>
  </main>

  <div class="observeContainer" id="observeContainer"></div>

  <div style="height:2000px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Player from 'xgplayer'
import { useIntersectionObserver } from '@vueuse/core'

onMounted(() => {
  const player = new Player({
    id: 'big',
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4"
  });
  const { stop } = useIntersectionObserver(
    document.getElementById('observeContainer'),
    ([{ isIntersecting }], observerElement) => {
      isShow.value = isIntersecting
      console.log(isIntersecting);
    },
  )
})
let isShow = ref(true)
// 监听
</script>

<style scoped>
#small {
  position: fixed;
  right: 100px;
  bottom: 100px;
  /* border: 3px solid black; */
}
</style>
