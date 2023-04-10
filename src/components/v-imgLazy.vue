<template>
  <main>
    <section id="content" style="height: 1000px;background-color: blue;"></section>
    <section id="imgContent">
      <img src="" alt="iphone" v-imgLazy="url">
    </section>
  </main>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const url = "http://stu-projects-web.itheima.net/guangzhou/uemo/images/iphone_large.jpg"
const vImgLazy = {
  mounted(el: any, bindings: any) {
    console.log(el, bindings.value);
    const { stop } = useIntersectionObserver(
      document.getElementById('imgContent'),
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          el.src = bindings.value
          stop()
        }
      },
    )
  },
}

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
