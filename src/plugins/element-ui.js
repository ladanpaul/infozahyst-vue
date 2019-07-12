import Vue from 'vue'
import Input from 'element-ui/lib/input'
import ButtonGroup from 'element-ui/lib/button-group'
import Button from 'element-ui/lib/button'


const components = [
  Input,
  Button,
  ButtonGroup
]

components.forEach((Component) => {
  if (typeof Component.install === 'function') {
    Vue.use(Component)
  } else if (Component.name) {
    Vue.component(Component.name, Component)
  } else {
    console.error('Unable to register component', Component) // eslint-disable-line no-console
  }
})
