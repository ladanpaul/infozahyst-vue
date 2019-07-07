import Vue from 'vue'

Vue.directive('sticky', (el, binding) => {
  el.style.position = 'fixed'
  el.style.width = "100%"

  const background = () => {
    const navTop = window.pageYOffset || document.documentElement.scrollTop;
    navTop >= el.offsetHeight
      ? el.style.background = binding.value
      : el.style.background = 'transparent'
  }

  document.addEventListener("scroll", background)
})