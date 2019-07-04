<template>
  <section class="section infozahyst-main">
    <SliderSwiper />
  </section>
</template>

<script>
import SliderSwiper from "./SliderSwiper";

export default {
  name: "InfozahystMain",

  components: {
    SliderSwiper
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/var.scss";

.infozahyst-main {
  height: 1500px;
  width: 100%;
  background: $black;
  color: #fff;
}
</style>
