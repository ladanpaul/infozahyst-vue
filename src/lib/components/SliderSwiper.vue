<template>
  <swiper
    :options="mainSwiperOptions"
    ref="mainSwiper"
  >
    <swiperSlide>
      <div class="content-wrapper">
        <slot name="content" />
      </div>
      <div class="image-wrapper">
        <slot name="image" />
      </div>
      <slot />
    </swiperSlide>
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

export default {
  name: "carrousel",

  components: {
    swiper,
    swiperSlide
  },

  data() {
    return {
      mainSwiperOptions: {
        keyboard: { enabled: true },
        centeredSlides: true,
        spaceBetween: 10,
        watchOverflow: true
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
@import "@/styles/var.scss";

/deep/ .swiper-wrapper {
  height: 60vh;

  .content-wrapper {
    display: flex;
    border: 2px solid orange;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      max-width: 340px;
      height: 220px;
    }
  }

  .image-wrapper {
    display: flex;
    border: 2px solid orange;

    img {
      margin: auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: space-between;

    .content-wrapper,
    .image-wrapper {
      flex-basis: 48%;
    }
  }
}
</style>
