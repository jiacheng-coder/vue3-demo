import { h, render } from 'vue'
import ecosAlert from '../components/ecos-alert.vue'
export const myAlert = () => {
  const VNode = h(ecosAlert)
  const el = document.createElement('div')
  render(VNode, el)
  document.body.appendChild(el)
}
