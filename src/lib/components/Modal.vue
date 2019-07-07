<template>
  <transition name="modal">
    <section class="modal">
      <div
        class="modal-mask"
        @click="$emit('close')"
      >
      </div>
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
            </slot>
          </div>

          <div class="close">
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style lang="scss" scoped>
.modal-mask,
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: #333;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal {
  background: transparent;
}

.modal-wrapper {
  margin: auto;
  position: relative;
  z-index: 999;
}

.modal-container {
  margin: 0px auto;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  font-family: Helvetica, Arial, sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header,
.modal-body {
  margin-bottom: 20px;
}

.modal-footer {
  // border: 2px solid blue;
}

.modal-default-button {
  // border: 1px solid blue;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
