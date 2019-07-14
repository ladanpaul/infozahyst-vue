import Vue from 'vue'
import Input from 'element-ui/lib/input'
import Button from 'element-ui/lib/button'
import Dialog from 'element-ui/lib/dialog'

const components = [
  Input,
  Button,
  Dialog
]

components.forEach((Component) => {
  if (typeof Component.install === 'function') {
    Vue.use(Component)
  } else if (Component.name) {
    Vue.component(Component.name, Component)
  } else {
    console.error('Unable to register component', Component)
  }
})