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
import content from '@/lib/content/MainSlider.yml'

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
    this.MainSliderContent = content.MainSliderContent;
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