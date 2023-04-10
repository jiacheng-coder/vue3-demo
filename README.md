# vue3-demo

> 一些vue3新特性的最小化实现（包含业务场景）
>
> Some minimal practices of Vue3's new features that include business scenarios.

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## IDE推荐

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 业务场景

### teleport-demo

> Teleport + useIntersectionObserver(hooks in vueuse)

使用teleport组件和vueuse中的useIntersectionObserver hooks实现bilibili的视频播放效果

### v-lazy

>自定义指令 + useIntersectionObserver(hooks in vueuse)

使用自定义指令实现图片懒加载

### v-memo

> v-memo + watch

使用`v-memo`实现静态列表的渲染优化

### h+render

使用h()+render()函数实现面向过程式渲染

### defineAsyncComponent

>defineAsyncComponent + useIntersectionObserver(hooks in vueuse)

使用defineAsyncComponent优化首屏加载的性能
