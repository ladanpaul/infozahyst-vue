<template>
  <swiper
    :options="mainSwiperOptions"
    ref="mainSwiper"
  >
    <swiper-slide
      v-for="slide in slides"
      :key="slide.title"
    >
      <MainSlide :slide="slide">
        <slot v-bind:slide="slide" />
      </MainSlide>
    </swiper-slide>
    <div
      class="swiper-button-prev"
      slot="button-prev"
      @click="prevSlide"
    />
    <div
      class="swiper-button-next"
      slot="button-next"
      @click="nextSlide"
    />
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import MainSlide from "@/lib/components/MainSlide";

export default {
  name: "carrousel",

  components: {
    swiper,
    swiperSlide,
    MainSlide
  },

  props: {
    slides: { type: Array, required: true }
  },

  data() {
    return {
      mainSwiperOptions: {
        keyboard: { enabled: true },
        centeredSlides: true,
        spaceBetween: 10,
        watchOverflow: true,
        loop: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const { mainSwiper, thumbsSwiper } = this.$refs;
      this.mainSwiper = mainSwiper.swiper;
    });
  },

  methods: {
    prevSlide() {
      this.mainSwiper.slidePrev();
    },

    nextSlide() {
      this.mainSwiper.slideNext();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/theme/common/var.scss";

/deep/ .swiper-wrapper {
  height: 60vh;
}
</style>
