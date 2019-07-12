<template>
  <section class="section infozahyst-main">
    <SliderSwiper
      v-if="MainSliderContent"
      :slides="MainSliderContent"
    />
  </section>
</template>

<script>
import SliderSwiper from "./SliderSwiper";
import { MainSliderContent } from "@/lib/content";

export default {
  name: "InfozahystMain",

  components: {
    SliderSwiper
  },

  data() {
    return {
      MainSliderContent: null
    };
  },

  mounted() {
    this.MainSliderContent = MainSliderContent;
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/theme/common/var.scss";

.infozahyst-main {
  height: 1500px;
  width: 100%;
  background: $black;
  color: #fff;
}
</style>