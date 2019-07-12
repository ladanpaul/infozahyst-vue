<template>
  <div class="slider-content">
    <div class="content-wrapper">
      <div>
        <h3 class="title">
          {{ slide.title }}
        </h3>
        <span class="description">
          {{ slide.description }}
        </span>
        <div class="buttons-wrapper">
          <button
            class="get-price"
            @click="showModal = true"
          >
            {{ $t('global.price') }}
          </button>
          <button class="get-details">
            {{ $t('global.details') }}
          </button>
        </div>
      </div>
    </div>

    <div class="image-wrapper">
      <img :src="getImgUrl(slide.imageUrl)">
    </div>
    <Modal
      v-if="showModal"
      @close="showModal = false"
    >
      <template #header>
        <h3>{{slide.title}}</h3>
      </template>
      <template #body>
        <!-- <h3>custom body</h3> -->
      </template>
      <template #footer>
        <h3>custom footer</h3>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "SlidePreview",

  components: {
    Modal
  },

  props: {
    slide: { type: Object, required: true }
  },

  data() {
    return {
      showModal: false
    };
  },

  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/theme/common/var.scss";

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
  cursor: pointer;
}

.get-details {
  color: #808080;
  border: 1px solid #808080;

  &:hover {
    background: #fbd334;
    color: rgba(#000, 0.8);
    border-color: #fbd334;
  }
}

.get-price {
  background: #fbd334;
  color: #000;

  &:hover {
    color: rgba(#000, 0.8);
  }
}

.slider-content {
  display: flex;
  justify-content: space-between;
  border: 2px solid blue;
  height: 100%;

  .content-wrapper,
  .image-wrapper {
    flex-basis: 48%;
  }

  .content-wrapper {
    display: flex;
    flex-basis: 48%;
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
    flex-basis: 48%;
    border: 2px solid orange;

    img {
      margin: auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
