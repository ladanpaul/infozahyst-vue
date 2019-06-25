<template>
  <header
    class="sticky-header"
    ref="header"
  >
    <img
      src="@/assets/logo_color_short.svg"
      alt="logo"
      class="logo"
    >

    <nav class="nav-list">
      <router-link
        to="/"
        class="nav-list__item"
      >
        Головна
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "StickyHeader",

  mounted() {
    const header = this.$refs.header;

    document.addEventListener("scroll", function() {
      const navTop = window.pageYOffset || document.documentElement.scrollTop;

      navTop >= 100
        ? header.classList.add("fill")
        : header.classList.remove("fill");
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/var.scss";

.sticky-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  min-height: 100px;
  border: 2px solid orange;
  padding: 0 105px;
  color: #fff;
}

.logo {
  width: 185px;
  min-height: 100%;
  border: 2px solid orange;
}

.fill {
  background: $black;
}

.nav-list {
  font-size: rem(18);

  &__item {
    color: $white;
  }

  a {
    line-height: 45px;
    padding: 0 15px;
    border-top: 5px solid transparent;
  }
}
</style>

