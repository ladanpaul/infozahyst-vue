<template>
  <swiper
    :options="mainSwiperOptions"
    ref="mainSwiper"
  >
    <swiperSlide>
      <div class="about-good-wrapper">
        <div class="about-good">
          <h3 class="title">
            Бла Бла Бла
          </h3>
          <span class="description">
            many text about bla bla bla
            hahaha huhuhu
          </span>
          <dir class="buttons-wrapper">
            <button class="get-price">
              Запит ціни
            </button>
            <button class="get-details">
              Деталі
            </button>
          </dir>
        </div>
      </div>
      <div class="image-wrapper">
        <img src="../../assets/plastun-sdr.png">
      </div>
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

  .image-wrapper {
    display: flex;
    justify-content: center;
    width: 400px;
  }

  img {
    width: auto;
    height: 100%;
  }

  .about-good-wrapper {
    display: flex;
  }

  .about-good {
    width: 70%;
    height: 40%;
    padding: 10px 30px;
    border: 2px solid pink;
    margin: auto;
    text-align: center;
  }

  .description {
    display: inline-block;
    margin-top: 34px;
  }

  .buttons-wrapper {
    margin-top: 40px;
  }

  .swiper-slide {
    display: flex;
    justify-content: space-between;

    * {
      flex-basis: 48%;
    }
  }
}
</style>
