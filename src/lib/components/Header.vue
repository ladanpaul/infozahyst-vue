<template>
  <header
    class="header"
    v-sticky="'#000'"
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
        {{ $t('navigate.home') }}
      </router-link>
      <select v-model="$i18n.locale">
        <option
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          :value="lang"
        >
          {{ lang }}
        </option>
      </select>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      langs: ["ua", "en"]
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/theme/common/var.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border: 2px solid orange;
  padding: 0 105px;
  color: #fff;
  z-index: 999;
}

.logo {
  width: 185px;
  height: 100%;
  border: 2px solid orange;
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

button {
  border: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;
}
</style>

