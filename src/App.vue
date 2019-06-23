<template>
  <main class="main">
    <StickyHeader />
    <section class="content">
      <router-view></router-view>
    </section>
    <Footer />
  </main>
</template>

<script>
import { StickyHeader, Footer } from "./lib";

export default {
  name: "app",

  components: {
    StickyHeader,
    Footer
  }
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .content {
    flex: 1 1;
  }
}
</style>
