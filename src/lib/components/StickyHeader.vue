<template>
  <div class="sticky-header">
    <header class="header">
      <img
        src="@/assets/logo_color_short.svg"
        alt="logo"
        class="logo"
      >
    </header>
  </div>
</template>

<script>
export default {
  name: "StickyHeader"
};
</script>

<style scoped lang="scss">
@import "@/styles/var.scss";

.sticky-header {
  position: relative;
  height: 100px;

  .header {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 100px;
    padding: 0 105px;
    background: $black;
    color: #fff;
  }

  .logo {
    width: 185px;
    height: 100%;
  }
}
</style>

