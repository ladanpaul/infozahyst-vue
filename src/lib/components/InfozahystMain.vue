<template>
  <section class="section infozahyst-main">
    <SliderSwiper>
      <template #content>
        <div
          v-for="slide in MainSliderContent"
          :key="slide.title"
        >
          <h3 class="title">
            {{ slide.title }}
          </h3>
          <span class="description">
            {{ slide.description }}
          </span>
          <dir class="buttons-wrapper">
            <button
              class="get-price"
              @click="showModal = true"
            >
              Запит ціни
            </button>
            <button class="get-details">
              Деталі
            </button>
          </dir>
        </div>
      </template>
      <template #image>
        <div
          v-for="slide in MainSliderContent"
          :key="slide.title"
        >
          <img :src="getImgUrl(slide.imageUrl)">
        </div>
      </template>
    </SliderSwiper>

    <Modal
      v-if="showModal"
      @close="showModal = false"
    >
      <template #header>
        <!-- <h3>custom header</h3> -->
      </template>
      <template #body>
        <!-- <h3>custom body</h3> -->
      </template>
      <template #footer>
        <h3>custom footer</h3>
      </template>
    </Modal>
  </section>
</template>

<script>
import SliderSwiper from "./SliderSwiper";
import Modal from "./Modal";
import { MainSliderContent } from "@/lib/content";

export default {
  name: "InfozahystMain",

  components: {
    SliderSwiper,
    Modal
  },

  data() {
    return {
      showModal: false,
      MainSliderContent: null
    };
  },

  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    }
  },

  mounted() {
    this.MainSliderContent = MainSliderContent;
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

.buttons-wrapper {
  display: flex;
  justify-content: space-between;
}

.get-price,
.get-details {
  border: none;
  width: 160px;
  padding: 10px 0 11px;
  outline: none;
  text-align: center;
  border-radius: 4px;
  background: transparent;
}

.get-details {
  color: #808080;
  border: 1px solid #808080;
}

.get-price {
  background: #fbd334;
  color: #000;
}
</style>